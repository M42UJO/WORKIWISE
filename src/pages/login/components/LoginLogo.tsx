import logo from "../../../assets/img/logo.png";




export default function LoginLogo() {
  return (
    <div className="flex flex-col items-center">
    <img src={logo} alt="Logo" className="w-[200px] lg:w-[420px]" />
    <h2
      className="text-white mt-4 text-center text-2xl lg:text-xl"
      style={{ letterSpacing: "9px" }}
    >
      Data Collection System
    </h2>

    <p
      className="text-gray-400 text-center text-xl lg:text-sm mt-3"
      style={{ letterSpacing: "13.8px" }}
    >
      business value co.td
    </p>
  </div>
  )
}

