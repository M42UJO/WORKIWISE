import React from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ArrowIcon from "../../../components/ArrowIcon";

interface DashboardSettingPopupProps {
    open: boolean;
    onClose: () => void;
}

const DashboardSettingPopup: React.FC<DashboardSettingPopupProps> = ({
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
                    borderRadius: "10px",
                    maxWidth: 370,
                    overflow: "hidden",
                },
            }}>


            <div className="p-4">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">User’s Workspace</p>
                    <button
                        onClick={onClose}
                        className=" right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
                    >
                        <X className="h-4 w-4 text-gray-500" />
                    </button>

                </div>

                <div className="flex flex-col space-y-2 mt-4">
                    <div className="flex justify-between items-center bg-[#CECECE] cursor-pointer  py-3 px-6 w-full rounded-lg">
                        <p>
                            Workspace Image
                        </p>
                        <ArrowIcon />
                    </div>
                    <div className="flex justify-between items-center bg-[#CECECE] cursor-pointer  py-3 px-6 w-full rounded-lg">
                        <p>
                        Rename Workspace
                        </p>
                        <ArrowIcon />
                    </div>
                    <div className="flex justify-between items-center bg-[#CECECE] cursor-pointer py-3 px-6 w-full rounded-lg">
                        <p>
                        Tags Workspace
                        </p>
                        <ArrowIcon />
                    </div>
                    <div className="flex justify-between items-center bg-[#CECECE] cursor-pointer py-3 px-6 w-full rounded-lg">
                        <p>
                        Permissions Workspace
                        </p>
                        <ArrowIcon />
                    </div>
                    <div className="flex justify-between items-center bg-[#CECECE] cursor-pointer py-3 px-6 w-full rounded-lg">
                        <p>
                        Delete Workspace
                        </p>
                        <ArrowIcon />
                    </div>
                </div>
            </div>

        </Dialog>
    );
};

export default DashboardSettingPopup;
