
import { useRoutes } from "react-router-dom";
import Main from "../pages/main/Main";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/home/Home";

// const MainPage = React.lazy(() => import("../page/MainPage/MainPage"));


export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: "/",
            element: 
            <Layouts pageshow={<Home />} />
            
          },       
           
       
        ],
      },
    ]);
  }
  