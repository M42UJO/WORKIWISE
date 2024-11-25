import React from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../components/ButtonSave";

import SetPermissions from "../../../components/SetPermissions";

interface DashboardSettingPermissionsPopupProps { open: boolean; onClose: () => void; }



const DashboardSettingPermissionsPopup: React.FC<DashboardSettingPermissionsPopupProps> = ({ open, onClose, }) => {



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
                    <p className="text-lg font-bold mr-2">Permissions </p>
                    <p className="mr-auto text-lg">User’s Workspace</p>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
                    >
                        <X className="h-4 w-4 text-gray-500" />
                    </button>
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

export default DashboardSettingPermissionsPopup;
