import { useRoutes, Navigate } from "react-router-dom";
import Main from "../pages/main/Main";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Setting from "../pages/setting/Setting";
import Document from "../pages/document/Document";

export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/dashboard",
            element: <Layouts pageshow={<Dashboard />} />,
          },
          {
            path: "/home",
            element: <Layouts pageshow={<Home />} />,
          },
          {
            path: "/setting",
            element: <Layouts pageshow={<Setting />} />,
          },
          {
            path: "/document",
            element: <Layouts pageshow={<Document />} />,
          },




          // เปลี่ยนเส้นทางเริ่มต้น 
          {
            path: "/",
            element: <Navigate to="/home" replace />,
          },
        ],
      },
    ]);
}
