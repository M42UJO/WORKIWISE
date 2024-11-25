import space from "../../../assets/img/space.png";
import React from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../components/ButtonSave";

interface DashboardSettingImagePopupProps {open: boolean;onClose: () => void;}

const DashboardSettingImagePopup: React.FC<DashboardSettingImagePopupProps> = ({open,onClose,}) => {


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
                    <p className="text-lg font-bold">Workspace Image</p>
                    <button
                        onClick={onClose}
                        className=" right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
                    >
                        <X className="h-4 w-4 text-gray-500" />
                    </button>

                </div>

                {/* Workspace Image */}
                <div className="flex flex-col items-center space-y-4 p-6">
                    <div className=" w-28 h-28 rounded-full overflow-hidden flex items-center justify-center">
                        <img
                            src={space}
                            alt="Workspace"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <ButtonSave />
            </div>

        </Dialog>
    );
};

export default DashboardSettingImagePopup;
