


import React from "react";
import { Dialog } from "@mui/material";
import bin from "/src/assets/img/binn.png";

interface DashboardSettingFolderDeletePopupProps {open: boolean;onClose: () => void;}

const DashboardSettingFolderDeletePopup: React.FC<DashboardSettingFolderDeletePopupProps> = ({open,onClose,}) => {


  return (
    <Dialog
    open={open}
    onClose={onClose}
    fullWidth
    maxWidth="sm"
    PaperProps={{
        sx: {
            borderRadius: "10px",
            maxWidth: 370,
            overflow: "hidden",
        },
    }}
>
    <div className="p-4 text-center">
        {/* ไอคอน */}
        <img
            src={bin}
            alt="bin icon"
            className="mx-auto w-16  mb-10 mt-6 "
        />

        {/* ข้อความ */}
        <p className="text-2xl font-bold mb-14">
            Want to delete a Folder?
        </p>

        {/* ปุ่ม */}
        <div className="flex justify-between space-x-3">
            <button
                onClick={onClose}
                className="w-full py-3 bg-[#AFAFAF] text-white rounded-md hover:bg-gray-300"
            >
                Cancel
            </button>
            <button

                className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800"
            >
                Confirm
            </button>
        </div>
    </div>
</Dialog>
  );
};

export default DashboardSettingFolderDeletePopup;
