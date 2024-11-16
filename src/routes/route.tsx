
import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import SettingAdd from "../pages/setting/components/SettingAdd";
import SettingEdit from "../pages/setting/components/SettingEdit";
import SettingList from "../pages/setting/components/SettingList";
import Spaces from "../pages/spaces/Spaces";
import ListEdit from "../pages/setting/components/ListEdit";




// const MainPage = React.lazy(() => import("../page/MainPage/MainPage"));


export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Dashboard/>,
        children: [
          {
            path: "/login",
            element: <Login/>
            ,
          },       
          {
            path: "/settingAdd",
            element: <SettingAdd/>
            ,
          },       
          {
            path: "/settingEdit",
            element: <SettingEdit/>
            ,
          },       
          {
            path: "/settingList",
            element: <SettingList/>
            ,
          },       
          {
            path: "/spaces",
            element: <Spaces/>
            ,
          },       
          {
            path: "/listEdit",
            element: <ListEdit/>
            ,
          },       
       
        ],
      },
    ]);
  }
  