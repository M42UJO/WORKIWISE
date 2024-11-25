import React from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../../components/ButtonSave";

import SetPermissions from "../../../../components/SetPermissions";

interface DashboardSettingNewfolderPopupProps { open: boolean; onClose: () => void; }



const DashboardSettingNewfolderPopup: React.FC<DashboardSettingNewfolderPopupProps> = ({ open, onClose, }) => {



    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: "20px",
                    maxWidth: 370,
                    overflow: "hidden",
                },
            }}
        >
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold mr-2">NewFolder </p>              
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
                    >
                        <X className="h-4 w-4 text-gray-500" />
                    </button>
                </div>
                <div className="mt-4">
                <p className="text-sm font-bold p-1">Folder name :</p>
                <input
                    type="text"
                    placeholder="Please enter folder name"                   
                    className="w-full p-3 border border-[#AFAFAF] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
            </div>

                <SetPermissions />

                {/* Save Button */}
                <div className="mt-6">
                    <ButtonSave />
                </div>
            </div>
        </Dialog>
    );
};

export default DashboardSettingNewfolderPopup;
