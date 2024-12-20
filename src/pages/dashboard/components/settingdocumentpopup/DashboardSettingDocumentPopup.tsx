import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ArrowIcon from "../../../../components/ArrowIcon";
import DashboardSettingDocumentDeletePopup from "./DashboardSettingDocumentDeletePopup";
import DashboardSettingDocumentMovePopup from "./DashboardSettingDocumentMovePopup";
import DashboardSettingDocumentPermissionPopup from "./DashboardSettingDocumentPermissionPopup";
interface DashboardSettingDocumentPopupProps {
  open: boolean;
  onClose: () => void;
  folderName: string;
  fileName: string;
  onDeleteFile: (folderName: string, fileName: string) => void;
  onMoveFile?: (sourceFolder: string, targetFolder: string, fileName: string) => void;
}
const DashboardSettingDocumentPopup: React.FC<DashboardSettingDocumentPopupProps> = ({
  open,
  onClose,
  folderName,
  fileName,
  onDeleteFile,
  onMoveFile,
}) => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const handlePopupClose = () => {
    setActivePopup(null);
  };
  const handleDelete = () => {
    onDeleteFile(folderName, fileName);
    onClose();
  };
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
            <p className="text-lg font-bold">{fileName}</p>
            <button
              onClick={onClose}
              className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <div
              onClick={() => setActivePopup("Permissions")}
              className="flex justify-between items-center bg-[#CECECE] hover:bg-[#F0F0F0] cursor-pointer py-3 px-6 w-full rounded-lg"
            >
              <p>Permissions</p>
              <ArrowIcon />
            </div>
            <div
              onClick={() => setActivePopup("Move")}
              className="flex justify-between items-center bg-[#CECECE] hover:bg-[#F0F0F0] cursor-pointer py-3 px-6 w-full rounded-lg"
            >
              <p>Move</p>
              <ArrowIcon />
            </div>
            <div
              onClick={() => setActivePopup("Delete")}
              className="flex justify-between items-center bg-[#CECECE] hover:bg-[#F0F0F0] cursor-pointer py-3 px-6 w-full rounded-lg"
            >
              <p>Delete</p>
              <ArrowIcon />
            </div>
          </div>
        </div>
      </Dialog>
      {activePopup === "Permissions" && (
        <DashboardSettingDocumentPermissionPopup open={true} onClose={handlePopupClose} />
      )}
      {activePopup === "Move" && (
        <DashboardSettingDocumentMovePopup 
          open={true} 
          onClose={handlePopupClose}
          sourceFolder={folderName}
          fileName={fileName}
          onMoveFile={onMoveFile}
        />
      )}
      {activePopup === "Delete" && (
        <DashboardSettingDocumentDeletePopup 
          open={true} 
          onClose={handlePopupClose}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};
export default DashboardSettingDocumentPopup;