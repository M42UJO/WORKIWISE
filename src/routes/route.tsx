
import { useRoutes } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";





// const MainPage = React.lazy(() => import("../page/MainPage/MainPage"));


export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Login/>,
        children: [
          {
            path: "/Dashboard",
            element: <Dashboard/>
            
          },       
           
       
        ],
      },
    ]);
  }
  