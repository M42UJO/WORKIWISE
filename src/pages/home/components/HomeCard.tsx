import React from "react";

const MainContent: React.FC = () => {
  return (
    <div className="p-8">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Recent</h2>

      {/* Recent Card */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-md w-80">
        {/* Card Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">User's Workspace</h3>
          <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
            {/* Replace with actual logo if available */}
            <img src="logo.png" alt="Icon" className="rounded-full" />
          </div>
        </div>

        {/* Date */}
        <p className="text-gray-600 text-sm mb-4">Date: Nov 10, 2022</p>

        {/* User Info */}
        <div className="flex items-center mb-4">
          <img
            src="/path/to/avatar.jpg" 
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="bg-white text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-300">
            API
          </span>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-4" />

        {/* Task Count */}
        <p className="text-gray-600 text-sm">1 Total Task</p>
      </div>
    </div>
  );
};

export default MainContent;
