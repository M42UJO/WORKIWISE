import { atom, selector, useRecoilCallback } from "recoil";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export interface tk {
  mtk: string;
  rtk: string;
}

export interface OnlineFace {
  isOnline: boolean;
  Prev: boolean;
}

export interface userdata {
  username: string;
  ud: any;
}

export const OnlineRec = atom<OnlineFace>({
  key: "OnlineRec",
  default: { isOnline: navigator.onLine, Prev: navigator.onLine },
});

export const Islogin = atom<boolean | null>({
  key: "Islogin",
  default: null, // ✅ Now valid because of boolean | null
});

export const tkState = atom<tk>({
  key: "tkState",
  default: {
    mtk: cookies.get("mtk") === undefined ? "" : cookies.get("mtk"),
    rtk: cookies.get("rtk") === undefined ? "" : cookies.get("rtk"),
  },
});

export const UserState = atom<userdata>({
  key: "UserState",
  default: {
    username: localStorage.getItem("username") || "",
    ud: (() => {
      try {
        const storedData = localStorage.getItem("ud");
        return storedData ? JSON.parse(storedData) : [];
      } catch (error) {
        console.error("Error parsing localStorage 'ud':", error);
        return [];
      }
    })(),
  },
});

export interface userWebdata {
  user_username: string;
  user_email: string;
  phonenumber: string;
  user_img: string;
  email_verify: boolean;
  tel_verify: boolean;
  id_verify: boolean;
  haspin: boolean;
}

export enum typeToast {
  error = "error",
  info = "info",
  success = "success",
  warning = "warning",
}

export interface dialogHandleType {
  visible: boolean;
  message: string;
  type: typeToast;
}

export const errorDialog = atom<dialogHandleType>({
  key: "errorDialog",
  default: { visible: false, message: "", type: typeToast.error },
});
