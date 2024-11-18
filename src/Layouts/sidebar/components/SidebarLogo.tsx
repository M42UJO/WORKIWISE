import icon from "../../../assets/img/workiwiseIcon.png";

export default function SidebarLogo() {
  return (
    <div className="flex items-center p-6 bg-[#11111D]">
      <img src={icon} alt="Workiwse Logo" className="h-7 w-7 mr-2" />
      <span className="text-white font-semibold text-lg">Workiwise</span>
      <button className="ml-auto w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
}
