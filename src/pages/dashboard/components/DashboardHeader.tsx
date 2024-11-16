import { Link } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-6">
    <h1 className="text-2xl font-semibold"></h1>
    <div className="flex items-center space-x-2 ">
      <input
        type="text"
        placeholder="ค้นหา"
        className="border py-4 pl-4 rounded-md w-96 shadow-md"
      />
      <button className="bg-gray-200 py-4 rounded-md w-40 shadow-md">
        กรองข้อมูล
      </button>
      <Link
        to="/AddSpaces"
        className="bg-slate-950 text-white text-center py-4 rounded-md w-40 shadow-md"
      >
        Spaces +
      </Link>
    </div>
  </header>
  )
}

