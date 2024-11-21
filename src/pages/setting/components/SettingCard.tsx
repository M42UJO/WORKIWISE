import React from "react";
import { FiUser, FiKey, FiInfo, FiLogOut } from "react-icons/fi"; // Icon imports

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex flex-col items-center">
        <img
          src="/path-to-avatar.jpg" // Replace with actual image path
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">Mala_C</h2>
        <ul className="mt-6 space-y-4 w-full">
          <li className="flex items-center p-3 hover:bg-gray-100 rounded-md cursor-pointer">
            <FiUser className="text-gray-500 mr-3" size={20} />
            <span className="text-gray-700">Set up a user account</span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-100 rounded-md cursor-pointer">
            <FiKey className="text-gray-500 mr-3" size={20} />
            <span className="text-gray-700">Change password</span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-100 rounded-md cursor-pointer">
            <FiInfo className="text-gray-500 mr-3" size={20} />
            <span className="text-gray-700">Version 1.0</span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-100 rounded-md cursor-pointer">
            <FiLogOut className="text-gray-500 mr-3" size={20} />
            <span className="text-gray-700">Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
