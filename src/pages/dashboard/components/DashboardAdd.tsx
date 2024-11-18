import React from "react";

const DashboardAdd: React.FC = () => {
  return (
    <div className="absolute bottom-4 right-4">
      <button
        className="flex items-center justify-center bg-gray-700 text-white rounded-full p-4 shadow-lg"
        aria-label="Add"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardAdd;
