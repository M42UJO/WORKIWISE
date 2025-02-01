import { useState } from "react";
import LoginLogo from "./components/LoginLogo";
import LoginVerification from "./components/LoginVerification";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function Login() {
  const [currentView, setCurrentView] = useState<"signin" | "signup" | "verification">("signin");

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side - Logo Section */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 bg-[#11111D] p-4">
        <LoginLogo />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 bg-white p-4">
        {currentView === "signup" && <Signup switchView={setCurrentView} />}
        {currentView === "signin" && <Signin switchView={setCurrentView} />}
        {currentView === "verification" && <LoginVerification switchView={setCurrentView} />}
      </div>
    </div>
  );
}

export default Login;
