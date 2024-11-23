import React, { useState } from "react";
import { Dialog} from "@mui/material";
import {  X } from "lucide-react";
import blank from "../../../assets/img/blank.jpg";

interface HomeSearchPopupProps {
  open: boolean;
  onClose: () => void;
}

const HomeSearchPopup: React.FC<HomeSearchPopupProps> = ({ open, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          maxWidth: 480,
          height: 500,
          overflow: "hidden",
        },
      }}
    >
      <div className="relative bg-white ">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 py-2 pt-4 pr-8 border-b  
                     focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all
                     text-gray-900 placeholder-gray-500"
            placeholder="Search"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full
                     hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* Recent Section */}
        <div className="">
          <h2 className="text-md font-bold text-gray-900 p-3 px-6">Recent</h2>

          {/* Workspace Item */}
          <div
            className="group flex items-center space-x-3 p-3 px-6 rounded-lg
                        hover:bg-gray-100 transition-colors duration-200 cursor-pointer shadow-sm"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 flex items-center justify-center">
              <img src={blank} alt="Icon" className="rounded-full" />
              </div>
            </div>
            <div className="flex justify-between w-full items-center pl-4">
              <p className="text-sm font-semibold text-gray-900">
                User's Workspace
              </p>
              <p className="text-xs">Date: Nov 10, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default HomeSearchPopup;
