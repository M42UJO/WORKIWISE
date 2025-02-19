import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetdataAPI_Get } from "../../../MainCall";
import DashboardSettingPopup from "./settingpopup/DashboardSettingPopup";
import blank from "../../../assets/img/blank.jpg";

interface WorkspaceData {
  space_id: number;
  space_name: string;
  img_path: string;
}

export default function DashboardUser() {
  const { space_id } = useParams<{ space_id: string }>();
  const numericSpaceId = space_id ? Number(space_id) : null; // แปลงเป็นตัวเลข
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [workspace, setWorkspace] = useState<WorkspaceData | null>(null);

  useEffect(() => {
    if (!numericSpaceId || isNaN(numericSpaceId)) return;

    let isMounted = true;

    async function fetchWorkspace() {
      try {
        console.log(`Fetching workspace for space_id: ${numericSpaceId}`); // ตรวจสอบค่า space_id
        const response = await GetdataAPI_Get(`/api/Workspace/GetWorkspace?space_id=${numericSpaceId}`);
        console.log("API Response:", response); // ตรวจสอบค่า API Response

        if (response && Array.isArray(response) && response.length > 0 && isMounted) {
          setWorkspace(response[0]); // ดึงค่าตัวแรกของ array
        } else {
          console.warn("No workspace data found.");
        }
      } catch (error) {
        console.error("Error fetching workspace:", error);
      }
    }

    fetchWorkspace();

    return () => {
      isMounted = false;
    };
  }, [numericSpaceId]);

  return (
    <>
      <div className="flex justify-between items-center space-x-4" onClick={() => setPopupOpen(true)}>
        <h3 className="font-bold text-base">
          {workspace?.space_name || "User's Workspace"}
        </h3>
        <div className="rounded-full w-10 h-10 flex items-center justify-center overflow-hidden">
          <img
            src={workspace?.img_path ? workspace.img_path : blank}
            alt="Workspace Icon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Popup Component */}
      <DashboardSettingPopup
        open={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        space_id={numericSpaceId ?? undefined}  // ป้องกัน error ถ้า space_id เป็น null
        workspaceName={workspace?.space_name || "User's Workspace"}
      />

    </>
  );
}
