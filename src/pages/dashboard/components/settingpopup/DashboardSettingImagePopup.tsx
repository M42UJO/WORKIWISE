import space from "/src/assets/img/space.png";
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { X, Camera } from "lucide-react"; // Import Camera icon
import ButtonSave from "../../../../components/ButtonSave";

interface DashboardSettingImagePopupProps {
    open: boolean;
    onClose: () => void;
}

const DashboardSettingImagePopup: React.FC<DashboardSettingImagePopupProps> = ({open,onClose,}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImage(imageURL);
        }
    };

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
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">Workspace Image</p>
                    <button
                        onClick={onClose}
                        className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
                    >
                        <X className="h-4 w-4 text-gray-500" />
                    </button>
                </div>

                {/* Workspace Image with Camera Icon */}
                <div className="flex flex-col items-center space-y-4 p-6">
                    <label
                        htmlFor="image-upload"
                        className="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer"
                    >
                        {/* Image */}
                        <img
                            src={selectedImage || space}
                            alt="Workspace"
                            className="w-full h-full object-cover"
                        />
                        {/* Gray Stripe Overlay with Camera Icon */}
                        <div className="absolute bottom-0 bg-gray-800/50 w-full h-8 flex items-center justify-center">
                            <Camera className="text-white w-5 h-5" />
                        </div>
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>

                <ButtonSave />
            </div>
        </Dialog>
    );
};

export default DashboardSettingImagePopup;
