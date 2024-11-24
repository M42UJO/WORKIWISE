import React from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";

interface SettingChangePasswordPopupProps {
  open: boolean;
  onClose: () => void;
}

const SettingChangePasswordPopup: React.FC<SettingChangePasswordPopupProps> = ({
  open,
  onClose,
}) => {


  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          maxWidth: 420,

          overflow: "hidden",
        },
      }}>


      <div className="p-8 ">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Change password</p>
          <button
            onClick={onClose}
            className=" right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>

        </div>

        <div className="flex flex-col space-y-4 mt-4">
          <div>
            <p className="text-sm font-bold p-1">Old password :</p>
            <input
              type="password"
              className="w-full border rounded-lg p-3 text-sm px-4 mb-2"
              placeholder="Please enter old password" />
          </div>
          <div>
            <p className="text-sm font-bold p-1">New password :</p>
            <input
              type="password"
              className="w-full border rounded-lg p-3 text-sm px-4 mb-2"
              placeholder="Please enter a new password" />
          </div>
          <div>
            <p className="text-sm font-bold p-1">Confirm new password :</p>

            <input
              type="password"
              className="w-full border rounded-lg p-3 text-sm px-4 mb-2"
              placeholder="Please confirm and enter a new password" />
          </div>

          <button
            className="bg-black hover:bg-gray-800 text-white py-3 w-full rounded-lg"

          >Save new password
          </button>
        </div>
      </div>

    </Dialog>
  );
};

export default SettingChangePasswordPopup;
