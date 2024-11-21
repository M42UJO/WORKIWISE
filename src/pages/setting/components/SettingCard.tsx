import React from "react";
import { FiUser, FiKey, FiInfo, FiLogOut } from "react-icons/fi";

const ProfileCard: React.FC = () => {
  return (
    <div className="w-80 border border-gray-200 rounded-lg shadow-md p-6 text-center">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/100" // Replace with your desired image source
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 "
      />
      {/* Username */}
      <h3 className="text-lg font-semibold mb-4">Mala_C</h3>
      {/* Options List */}
      <div className="text-left">
        <div className="flex items-center p-3 cursor-pointer border-b border-gray-200 hover:bg-gray-50">
          <FiUser className="mr-3" />
          <span>Set up a user account</span>
        </div>
        <div className="flex items-center p-3 cursor-pointer border-b border-gray-200 hover:bg-gray-50">
          <FiKey className="mr-3" />
          <span>Change password</span>
        </div>
        <div className="flex items-center p-3 cursor-pointer border-b border-gray-200 hover:bg-gray-50">
          <FiInfo className="mr-3" />
          <span>Version 1.0</span>
        </div>
        <div className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
          <FiLogOut className="mr-3" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
