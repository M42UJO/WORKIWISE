import React, { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../../components/ButtonSave";
import { GetdataAPI_Get, GetdataAPI_Put } from "../../../../MainCall";

interface DashboardSettingRenamePopupProps {
  open: boolean;
  onClose: () => void;
  space_id: number | null; 
}

const DashboardSettingRenamePopup: React.FC<DashboardSettingRenamePopupProps> = ({
  open,
  onClose,
  space_id,
}) => {
  const [workspaceName, setWorkspaceName] = useState<string>("");

  // ดึงชื่อ Workspace ปัจจุบัน
  useEffect(() => {
    if (!space_id) return;

    async function fetchWorkspace() {
      try {
        const response = await GetdataAPI_Get(`/api/Workspace/GetWorkspace?space_id=${space_id}`);

        if (response && Array.isArray(response) && response.length > 0) {
          setWorkspaceName(response[0].space_name);
        }
      } catch (error) {
        console.error("Error fetching workspace:", error);
      }
    }

    fetchWorkspace();
  }, [space_id]);

  // ฟังก์ชันอัปเดตชื่อ
  const handleRename = async () => {
    if (!space_id || workspaceName.trim() === "") return;
  
    try {
      await GetdataAPI_Put(`/api/Workspace/EditspaceName?space_id=${space_id}`, {
        workspace_name: workspaceName,
      });
  
      console.log("Workspace renamed successfully!");
      onClose(); 
    } catch (error) {
      console.error("Error renaming workspace:", error);
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
          <p className="text-lg font-bold">Rename Workspace</p>
          <button
            onClick={onClose}
            className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* Input สำหรับเปลี่ยนชื่อ Workspace */}
        <div className="w-full mb-6 mt-2">
          <p className="text-sm font-bold p-1">Workspace name :</p>
          <input
            type="text"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            className="w-full border border-[#AFAFAF] rounded-lg p-3 text-sm px-4"
          />
        </div>

        {/* ปุ่ม Save */}
        <ButtonSave onClick={handleRename} />
      </div>
    </Dialog>
  );
};

export default DashboardSettingRenamePopup;
