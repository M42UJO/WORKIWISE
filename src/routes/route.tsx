// src/routes/Router.tsx
import { useRoutes, Navigate } from "react-router-dom";
import Main from "../pages/main/Main";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Setting from "../pages/setting/Setting";
import Document from "../pages/document/Document";
import DashboardUser from "../pages/dashboard/components/DashboardUser";
import HomeSearch from "../pages/home/components/HomeSearch";
import SettingHeader from "../pages/setting/components/SettingHeader";
import AddList from "../pages/add/Addlist";
import PrivateRoute from "./PrivateRoute";
import { useRecoilValue } from "recoil";
import { authState } from "../store/authState";

export default function Router() {
  const loggedIn = useRecoilValue(authState);

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
          element: (
            <PrivateRoute
              element={<Layouts pageshow={<Dashboard />} headershow={<DashboardUser />} />}
            />
          ),
        },
        {
          path: "/home",
          element: (
            <PrivateRoute
              element={<Layouts pageshow={<Home />} headershow={<HomeSearch />} />}
            />
          ),
        },
        {
          path: "/setting",
          element: (
            <PrivateRoute
              element={<Layouts pageshow={<Setting />} headershow={<SettingHeader />} />}
            />
          ),
        },
        {
          path: "/document",
          element: (
            <PrivateRoute element={<Layouts pageshow={<Document />} />} />
          ),
        },
        {
          path: "/addlist",
          element: (
            <PrivateRoute element={<Layouts pageshow={<AddList />} />} />
          ),
        },
        {
          path: "/",
          element: <Navigate to={loggedIn ? "/dashboard" : "/login"} replace />,
        },
        {
          path: "*",
          element: <Navigate to="/login" replace />,
        },
      ],
    },
  ]);
}
