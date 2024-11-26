import blank from "../../../assets/img/blank.jpg";
import { useState } from "react";
import DashboardSettingPopup from "./settingpopup/DashboardSettingPopup";



export default function DashboardUser() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpen = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);

    return (
      <>
        <div className="absolute top-4 right-4 cursor-pointer " onClick={handleOpen}>
          <div className="flex justify-between items-center space-x-4 p-2">
            <h3 className="font-bold text-base">User's Workspace</h3>
            <div className="rounded-full w-10 h-10 flex items-center justify-center">
              {/* Replace with actual logo if available */}
              <img src={blank} alt="Icon" className="rounded-full" />
            </div>
          </div>
        </div>
              {/* Popup Component */}
      <DashboardSettingPopup open={isPopupOpen} onClose={handleClose} />

        </>
    );
};
