import Mainserv from "./Mainserv.json";
import { OnlineRec, tkState } from "./MainRecoil";
import Cookies from "universal-cookie";
import { getRecoilPromise } from "recoil-nexus";
import Auth from "./Auth";
import axios, { CancelTokenSource } from "axios";
import auhv from "./auhv.json";

const { AuthenticateEX } = auhv;
const cookies = new Cookies();

export const timeout = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function ResolveUrl(url: string) {
  const { MainAPIserv } = Mainserv;
  return url.replace("~/", MainAPIserv);
}

export async function GetdataAPI_Outside(
  url: string,
  databody: any = {},
  ccToken?: CancelTokenSource
) {
  let data;
  let token = undefined;
  if (ccToken !== undefined) {
    token = ccToken.token;
  }
  const online = await getRecoilPromise(OnlineRec);
  if (online.isOnline) {
    data = await axios
      .post(ResolveUrl("~" + url), JSON.stringify(databody), {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authenticate: AuthenticateEX,
          sys: "App",
        },
        cancelToken: token,
      })
      .then((res) => res.data)
      .then(async (response) => {
        return response;
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return { Status: "Cancle" };
        } else {
          // MsgWarning("Something went wrong");
          console.error("Error:", error);
          return { Status: "Error" };
        }
      });
  } else {
    // MsgWarning("Please check your internet");
    data = { Status: "Offline" };
  }

  console.log("call API" + url);

  return data;
}

export async function GetdataAPI(
  url: string,
  databody: any = {},
  ccToken?: CancelTokenSource
) {
  console.log("call API" + url);
  let token = undefined;
  if (ccToken !== undefined) {
    token = ccToken.token;
  }
  let data;
  const online = await getRecoilPromise(OnlineRec);
  const tkmstate = await getRecoilPromise(tkState);
  if (online.isOnline) {
    data = await axios
      .post(ResolveUrl("~" + url), JSON.stringify(databody), {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + tkmstate.mtk,
          sys: "WebApp",
        },
        cancelToken: token,
      })
      .then(async (res) => {
        /*const ret = await GetdataAPISection(url, databody, res, ccToken); */
        const ret = res.data;
        return ret;
      })
      .then((response) => response)
      .catch(async (error) => {
        if (axios.isCancel(error)) {
          return { Status: "Cancle" };
        } else if (error.response) {
          if ((error.response.status = 401)) {
            const ret = await GetdataAPISection(url, databody, ccToken);
            return ret;
          } else {
            // MsgWarning("Something went wrong");
            return { Status: "Error" };
          }
        } else {
          // MsgWarning("Something went wrong");
          return { Status: "Error" };
        }
      });
  } else {
    // MsgWarning("Please check your internet");
    data = { Status: "Offline" };
  }

  return data;
}

const GetdataAPISection = async (
  url: string,
  databody: any = {},
  ccToken?: CancelTokenSource
) => {
  const tkmstate = await getRecoilPromise(tkState);
  let token = undefined;
  if (ccToken !== undefined) {
    token = ccToken.token;
  }

  const datamtk: string = await axios
    .post(
      ResolveUrl("~" + "/token"),
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: tkmstate.rtk,
      }),
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        cancelToken: token,
      }
    )
    .then((res) => {
      return res.data;
    })
    .then((response) => {
      if ("error" in response) {
        cookies.remove("mtk", { path: "/" });
        cookies.remove("rtk", { path: "/" });
        Auth.setMtk();

        return "";
      } else {
        const mtk = response.access_token;
        const rtk = response.refresh_token;
        const t = new Date(new Date());
        t.setDate(t.getDate() + 1);

        cookies.set("mtk", mtk, {
          path: "/",
          sameSite: "lax",
          expires: t,
        });
        cookies.set("rtk", rtk, {
          path: "/",
          sameSite: "lax",
          expires: t,
        });
        Auth.setMtk();
        return mtk;
      }
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.error("Cancle:", error);
      } else {
      }

      return "";
    });
  if (datamtk !== "") {
    const data = await axios
      .post(ResolveUrl("~" + url), JSON.stringify(databody), {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + datamtk,
          sys: "WebApp",
        },
        cancelToken: token,
      })
      .then((res) => res.data)
      .then(async (response) => {
        return response;
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return { Status: "Cancle" };
        } else {
          // MsgWarning("Something went wrong");
          console.error("Error:", error);
          return { Status: "Error" };
        }
      });

    return data;
  } else {
    Auth.LogOut();
    return { Status: "Unauthorized", Data: datamtk };
  }
};

export const resizeImg = (file: File, size: number): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = function () {
        // Calculate the ratio to resize
        const ratio = size / img.width;
        const canvas = document.createElement("canvas");
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.5);
          resolve(resizedDataUrl);
        } else {
          reject("Canvas context is not available");
        }
      };
      img.src = String(e.target?.result); // Type-safe access to the event target
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file); // Use file instead of files (single file upload)
  });
