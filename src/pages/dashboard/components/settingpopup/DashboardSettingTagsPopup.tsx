import React, { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import Select, { MultiValue } from "react-select";
import ButtonSave from "../../../../components/ButtonSave";
import { GetdataAPI_Get, GetdataAPI_Put } from "../../../../MainCall";

interface DashboardSettingTagsPopupProps {
  open: boolean;
  onClose: () => void;
  space_id: number | null;
}

interface Tag {
  label: string;
  value: string;
}

const DashboardSettingTagsPopup: React.FC<DashboardSettingTagsPopupProps> = ({
  open,
  onClose,
  space_id,
}) => {
  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);

  useEffect(() => {
    if (!space_id) return;

    async function fetchWorkspaceTags() {
      try {
        const response = await GetdataAPI_Get(`/api/Workspace/GetWorkspace?space_id=${space_id}`);
        if (response && response.length > 0) {
          const workspace = response[0];

          setWorkspaceName(workspace.space_name || "");

          const existingTags = workspace.tag_list?.map((tag: { tag_name: string; tag_id: number }) => ({
            label: tag.tag_name,
            value: tag.tag_id.toString(),
          })) || [];

          setSelectedTags(existingTags);
        }
      } catch (error) {
        console.error("Error fetching workspace tags:", error);
      }
    }

    async function fetchAllTags() {
      try {
        const response = await GetdataAPI_Get(`/api/Workspace/GetAllTags`);
        if (response && Array.isArray(response)) {
          const availableTags = response.map(tag => ({
            label: tag.tags_name,
            value: tag.tags_id.toString(),
          }));

          setAllTags(availableTags);
        }
      } catch (error) {
        console.error("Error fetching all tags:", error);
      }
    }

    fetchWorkspaceTags();
    fetchAllTags();
  }, [space_id]);

  // ✅ แก้ TypeScript Error (MultiValue<Tag>)
  const handleTagChange = (newValue: MultiValue<Tag>) => {
    setSelectedTags(newValue as Tag[]);
  };

  // ✅ แก้ API Error 400 (เพิ่ม workspace_name ใน request)
  const handleUpdateTags = async () => {
    if (!space_id || !workspaceName.trim()) return;

    try {
      const tagValues = selectedTags.map(tag => ({ tags_id: Number(tag.value) }));

      const requestData = {
        workspace_name: workspaceName, // ✅ ต้องส่ง workspace_name
        tags_list: tagValues,
      };

      console.log("Request Payload:", requestData); // ✅ Debug ค่าที่ส่งไป API

      await GetdataAPI_Put(`/api/Workspace/EditspaceTags?space_id=${space_id}`, requestData);

      console.log("Tags updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating tags:", error);
    }
  };

  return (
    <Dialog
      key={space_id}
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          maxWidth: 400,
          overflow: "hidden",
        },
      }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold mr-2">Tags</p>
          <p className="mr-auto text-lg">{workspaceName || "Loading..."}</p>
          <button
            onClick={onClose}
            className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* Dropdown เลือก Tags */}
        <div className="w-full mt-4">
          <p className="text-sm font-bold p-1">เลือก Tags:</p>
          <Select
            options={allTags}
            isMulti
            placeholder="Search and Select Tags..."
            onChange={handleTagChange} // ✅ ใช้ฟังก์ชันที่แก้ไขแล้ว
            value={selectedTags}
            className="mb-4"
          />
        </div>

        {/* แสดง Tags ที่เลือก */}
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedTags.map(tag => (
            <button
              key={tag.value}
              onClick={() => setSelectedTags(selectedTags.filter(t => t.value !== tag.value))}
              className="px-[21px] py-2 text-xs rounded-lg bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* ปุ่มบันทึก */}
        <div className="mt-4">
          <ButtonSave onClick={handleUpdateTags} />
        </div>
      </div>
    </Dialog>
  );
};

export default DashboardSettingTagsPopup;
