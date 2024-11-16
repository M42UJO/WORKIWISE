import LoginForm from "./components/LoginForm";
import LoginLogo from "./components/LoginLogo";


export default function Login() {
  return (
    <>
    <div className="bg-[#11111D] h-screen flex flex-col lg:flex-row justify-center items-center space-y-12 space-y-0 space-x-20 gap-20">
      {/* Logo Section */}
      <LoginLogo/>

      {/* Login Form Section */}
      <LoginForm/>
    </div>
  </>
    
  )
}

