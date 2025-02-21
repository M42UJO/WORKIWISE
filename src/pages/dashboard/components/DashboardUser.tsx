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
  const numericSpaceId = space_id ? Number(space_id) : 0;   
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [workspace, setWorkspace] = useState<WorkspaceData | null>(null);

  useEffect(() => {
    if (!numericSpaceId || isNaN(numericSpaceId)) return;

    let isMounted = true;

    async function fetchWorkspace() {
      try {
        const response = await GetdataAPI_Get(`/api/Workspace/GetWorkspace?space_id=${numericSpaceId}`);

        if (response && Array.isArray(response) && response.length > 0 && isMounted) {
          setWorkspace(response[0]); 
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
        space_id={numericSpaceId ?? undefined}
        workspaceName={workspace?.space_name || "User's Workspace"}
      />

    </>
  );
}
