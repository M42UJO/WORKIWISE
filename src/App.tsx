import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import Router from "./routes/route";
import { setMtk, setUser, CheckLoginStatus } from "./Auth"; // ✅ ใช้ CheckLoginStatus
import { setRecoil } from "recoil-nexus";
import { Islogin } from "./MainRecoil";

const App: React.FC = () => {
  useEffect(() => {
    CheckLoginStatus(); // ✅ ใช้ฟังก์ชันเช็คสถานะล็อกอินที่แก้ไขใหม่
  }, []);
  

  return (
    <RecoilRoot>
      <RecoilNexus />
      <Router />
    </RecoilRoot>
  );
};

export default App;
