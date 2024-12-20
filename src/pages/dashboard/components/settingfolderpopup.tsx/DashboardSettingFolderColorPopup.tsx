import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { X, Check } from "lucide-react";
import ButtonSave from "../../../../components/ButtonSave";

interface DashboardSettingFolderColorPopupProps {
  open: boolean;
  onClose: () => void;
  onColorSelect: (color: string) => void;
}

const colors = [
  "#B433FF", // Purple
  "#5233FF", // Blue
  "#339CFF", // Light Blue
  "#44FF33", // Green
  "#FFFF33", // Yellow
  "#FF9233", // Orange
  "#FF3333", // Red
];

const DashboardSettingFolderColorPopup: React.FC<DashboardSettingFolderColorPopupProps> = ({
  open,
  onClose,
  onColorSelect,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[2]); // Default to light blue

  const handleSave = () => {
    onColorSelect(selectedColor);
    onClose();
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
          <p className="text-lg font-bold">Folder color</p>
          <button
            onClick={onClose}
            className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        <div className="flex justify-between items-center px-4 my-8">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className="relative w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && <Check className="h-5 w-5 text-white" />}
            </button>
          ))}
        </div>

        <div onClick={handleSave}>
          <ButtonSave />
        </div>
      </div>
    </Dialog>
  );
};

export default DashboardSettingFolderColorPopup;