import React from "react";

const DashboardSearch: React.FC = () => {
  return (
    <div className="absolute top-4 right-4">
      <div className="flex items-center bg-transparent border border-gray-300 text-gray-500 rounded-full px-4 py-2 shadow-sm hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.4-6.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-gray-500 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default DashboardSearch;
