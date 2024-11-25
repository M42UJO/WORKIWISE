import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ArrowIcon from "../../../../components/ArrowIcon";

// Popup components
import DashboardSettingImagePopup from "./DashboardSettingImagePopup";
import DashboardSettingRenamePopup from "./DashboardSettingRenamePopup";
import DashboardSettingTagsPopup from "./DashboardSettingTagsPopup";
import DashboardSettingPermissionsPopup from "./DashboardSettingPermissionsPopup";
import DashboardSettingDeletePopup from "./DashboardSettingDeletePopup";

interface DashboardSettingPopupProps { open: boolean;onClose: () => void;}

const DashboardSettingPopup: React.FC<DashboardSettingPopupProps> = ({open,onClose,}) => {

    const [activePopup, setActivePopup] = useState<string | null>(null);

    const handlePopupClose = () => {setActivePopup(null);};

    return (
        <>
            <Dialog
                open={open && !activePopup}
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
                        <div
                            onClick={() => setActivePopup("image")}
                            className="flex justify-between items-center bg-[#CECECE] cursor-pointer  py-3 px-6 w-full rounded-lg"
                        >
                            <p>Workspace Image</p>
                            <ArrowIcon />
                        </div>
                        <div
                            onClick={() => setActivePopup("rename")}
                            className="flex justify-between items-center bg-[#CECECE] cursor-pointer  py-3 px-6 w-full rounded-lg"
                        >
                            <p>Rename Workspace</p>
                            <ArrowIcon />
                        </div>
                        <div
                            onClick={() => setActivePopup("tags")}
                            className="flex justify-between items-center bg-[#CECECE] cursor-pointer py-3 px-6 w-full rounded-lg"
                        >
                            <p>Tags Workspace</p>
                            <ArrowIcon />
                        </div>
                        <div
                            onClick={() => setActivePopup("permissions")}
                            className="flex justify-between items-center bg-[#CECECE] cursor-pointer py-3 px-6 w-full rounded-lg"
                        >
                            <p>Permissions Workspace</p>
                            <ArrowIcon />
                        </div>
                        <div
                            onClick={() => setActivePopup("delete")}
                            className="flex justify-between items-center bg-[#CECECE] cursor-pointer py-3 px-6 w-full rounded-lg"
                        >
                            <p>Delete Workspace</p>
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
            </Dialog>

            {/* Sub Popups */}
            {activePopup === "image" && (
                <DashboardSettingImagePopup open={true} onClose={handlePopupClose} />
            )}
            {activePopup === "rename" && (
                <DashboardSettingRenamePopup open={true} onClose={handlePopupClose} />
            )}
            {activePopup === "tags" && (
                <DashboardSettingTagsPopup open={true} onClose={handlePopupClose} />
            )}
            {activePopup === "permissions" && (
                <DashboardSettingPermissionsPopup open={true} onClose={handlePopupClose} />
            )}
            {activePopup === "delete" && (
                <DashboardSettingDeletePopup open={true} onClose={handlePopupClose} />
            )}
        </>
    );
};

export default DashboardSettingPopup;
