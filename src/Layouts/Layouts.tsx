import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

interface LayoutProps {
  pageshow: React.ReactNode;
  headershow?: React.ReactNode; // เพิ่ม headershow เป็น optional prop
}

const Layouts: React.FC<LayoutProps> = ({ pageshow, headershow }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar for large screens */}
      <aside className="hidden lg:block w-64 bg-gray-800 text-white">
        <Sidebar />
      </aside>

      {/* Sidebar for small screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 z-50 bg-gray-800 w-64 h-full transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Sidebar />
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-1 lg:p-8 overflow-y-auto">
        {/* Header for mobile with Hamburger Menu */}
        <header className="flex items-center justify-between  pb-0">
          {/* Hamburger Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Headershow (Always visible on the right) */}
          <div className="ml-auto">{headershow}</div>
        </header>

        {pageshow}
      </div>

    </div>
  );
};

export default Layouts;
