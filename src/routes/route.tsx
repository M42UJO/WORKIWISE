import { useRoutes, Navigate } from "react-router-dom";
import { useAuthStore } from "../pages/login/components/store/useAuthStore"; 
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

// Component Check Login
function PrivateRoute({ element }: { element: JSX.Element }) {
  const loggedIn = useAuthStore((state) => state.loggedIn);
  return loggedIn ? element : <Navigate to="/login" replace />;
}

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
          element: (
            <PrivateRoute
              element={
                <Layouts pageshow={<Dashboard />} headershow={<DashboardUser />} />
              }
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
          path: "/",
          element: <Navigate to="/login" replace />,
        },
      ],
    },
  ]);
}
