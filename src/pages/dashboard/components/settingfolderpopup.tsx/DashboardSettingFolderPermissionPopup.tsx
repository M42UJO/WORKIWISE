import React from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../../components/ButtonSave";
import SetPermissions from "../../../../components/SetPermissions";

interface DashboardSettingFolderPermissionPopupProps {open: boolean;onClose: () => void;}

const DashboardSettingFolderPermissionPopup: React.FC<DashboardSettingFolderPermissionPopupProps> = ({open,onClose,}) => {


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
          <p className="text-lg font-bold mr-2">Permissions </p>
          <p className="mr-auto text-lg">Folder A</p>
          <button
            onClick={onClose}
            className=" right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>

        </div>
        <div className="mb-6">
        <SetPermissions/>
        </div>

        <ButtonSave />
      </div>

    </Dialog>
  );
};

export default DashboardSettingFolderPermissionPopup;
