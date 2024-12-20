import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../../components/ButtonSave";
interface DashboardSettingFolderRenamePopupProps {
  open: boolean;
  onClose: () => void;
  folderName: string;
  onRename: (newName: string) => void;
}
const DashboardSettingFolderRenamePopup: React.FC<DashboardSettingFolderRenamePopupProps> = ({
  open,
  onClose,
  folderName,
  onRename,
}) => {
  const [newFolderName, setNewFolderName] = useState(folderName);
  const handleSubmit = () => {
    if (newFolderName.trim() && newFolderName !== folderName) {
      console.log("Submitting new folder name:", newFolderName);
      onRename(newFolderName.trim());
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
      }}>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold mr-2">Rename </p>
          <p className="mr-auto text-lg">Folder</p>
          <button
            onClick={onClose}
            className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        {/* Workspace Name Input */}
        <div className="w-full mb-6 mt-2">
          <p className="text-sm font-bold p-1">Folder name :</p>
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="Please enter folder name"
            className="w-full border border-[#AFAFAF] rounded-lg p-3 text-sm px-4"
          />
        </div>
        <div onClick={handleSubmit}>
          <ButtonSave />
        </div>
      </div>
    </Dialog>
  );
};
export default DashboardSettingFolderRenamePopup;