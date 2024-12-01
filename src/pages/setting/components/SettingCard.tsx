import React, { useState } from "react";
import { FiUser, FiKey, FiInfo, FiLogOut } from "react-icons/fi";
import profile2 from "../../../assets/img/profile2.png";
import SettingChangePasswordPopup from "./SettingChangpasswordPopup";
import ArrowIcon from "../../../components/ArrowIcon";
import { useNavigate } from 'react-router-dom';



const ProfileCard: React.FC = () => {
  
  const navigate = useNavigate();
  // ฟังก์ชันสำหรับลบ Cookie และกลับไปหน้า Login
  const handleLogout = () => {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // ลบ Cookie
    navigate("/Login"); // เปลี่ยนเส้นทางกลับไปหน้า Login
  };


  const [isPopupOpen, setPopupOpen] = useState(false);
  return (
    <div className="w-80 border border-gray-200 rounded-lg shadow-md p-6 text-center">
      {/* Profile Image */}
      <img
        src={profile2}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 "
      />
      {/* Username */}
      <h3 className="text-sm font-bold mb-4 border-b border-gray-300 pb-3">Mala_C</h3>
      {/* Options List */}
      <div className="text-left font-semibold text-sm">
        <div className="flex items-center p-3 cursor-pointer justify-between hover:bg-gray-50">
          <div className="flex items-center">
            <FiUser className="mr-3" />
            <span>Set up a user account</span>
          </div>
          {/* Arrow Icon */}
          <ArrowIcon />
        </div>

        <div className="flex items-center p-3 cursor-pointer justify-between hover:bg-gray-50"
          onClick={() => setPopupOpen(true)}>
          <div className="flex items-center">
            <FiKey className="mr-3" />
          </div>
          <span>Change password</span>
          {/* Arrow Icon */}
          <ArrowIcon />
        </div>
        <SettingChangePasswordPopup
          open={isPopupOpen}
          onClose={() => setPopupOpen(false)}
        />
        <div className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <FiInfo className="mr-3" />
          </div>
          <span>Version 1.0</span>
        </div>
        <div className="flex items-center p-3  cursor-pointer justify-between hover:bg-gray-50" onClick={handleLogout}>
          <FiLogOut className="mr-3" />
          <span>Log out</span>
          {/* Arrow Icon */}
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
