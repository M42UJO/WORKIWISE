import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

interface HomeSearchPopupProps {
  open: boolean; // Determines whether the popup is open
  onClose: () => void; // Callback to close the popup
}

const HomeSearchPopup: React.FC<HomeSearchPopupProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <p className="text-lg font-semibold text-gray-600">Recent</p>
      </DialogTitle>
      <DialogContent>
        <div className="bg-white p-4 rounded-md">
          {/* List of Recent Items */}
          <div className="flex items-center border border-gray-200 p-3 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/40" // Replace with your icon/image source
              alt="User Icon"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex-grow">
              <p className="text-gray-800 font-medium">User's Workspace</p>
              <p className="text-sm text-gray-400">Date: Nov 10, 2022</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HomeSearchPopup;
