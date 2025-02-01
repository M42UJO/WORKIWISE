// src/routes/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../store/authState";

function PrivateRoute({ element }: { element: JSX.Element }) {
  const loggedIn = useRecoilValue(authState);
  return loggedIn ? element : <Navigate to="/login" replace />;
}

export default PrivateRoute;
