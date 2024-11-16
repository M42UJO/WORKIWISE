import { Link } from "react-router-dom";

export default function SidebarFooter() {
  return (
    <div className="py-6 pl-6 flex items-center space-x-2 bg-[#221E37] ">
    <img
      src="https://via.placeholder.com/30"
      alt="User Avatar"
      className="h-12 w-12 rounded-full"
    />
    <div className="flex items-center">
      <div className="mr-2">
        <p className="text-sm font-bold">User Name</p>
        <p className="text-xs text-gray-400">Role</p>
      </div>
      <div>
        <Link to={"/Login"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 ml-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
        </Link>
      </div>
    </div>
  </div>
  )
}

 