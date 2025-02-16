import { useRoutes, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Islogin } from "../MainRecoil";
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

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const isLoggedIn = useRecoilValue(Islogin);

  if (isLoggedIn === null) {
    return <p>Loading...</p>; // ป้องกันการ Redirect ทันทีที่แอปเริ่มทำงาน
  }

  return isLoggedIn ? element : <Navigate to="/login" replace />;
};


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
          element: <ProtectedRoute element={<Layouts pageshow={<Dashboard />} headershow={<DashboardUser />} />} />,
        },
        {
          path: "/home",
          element: <ProtectedRoute element={<Layouts pageshow={<Home />} headershow={<HomeSearch />} />} />,
        },
        {
          path: "/setting",
          element: <ProtectedRoute element={<Layouts pageshow={<Setting />} headershow={<SettingHeader />} />} />,
        },
        {
          path: "/document",
          element: <ProtectedRoute element={<Layouts pageshow={<Document />} />} />,
        },
        {
          path: "/addlist",
          element: <ProtectedRoute element={<Layouts pageshow={<AddList />} />} />,
        },
        {
          path: "/",
          element: <Navigate to="/login" replace />,
        },
      ],
    },
  ]);
}
