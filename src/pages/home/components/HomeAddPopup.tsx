import space from "/src/assets/img/space.png";
import React, { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import { X, Camera } from "lucide-react";
import { GetdataAPI_Get, GetdataAPI_Post } from "../../../MainCall";
import Select from "react-select";

interface HomeAddPopupProps {
  open: boolean;
  onClose: () => void;
}

interface Tag {
  value: string;
  label: string;
}

const HomeAddPopup: React.FC<HomeAddPopupProps> = ({ open, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  // ✅ ดึงข้อมูลแท็กจาก API
  const fetchTags = async () => {
    try {
      console.log("Fetching tags...");
      const response = await GetdataAPI_Get("/api/Workspace/GetAllTags");
      console.log("Fetched Tags:", response);

      if (Array.isArray(response)) {
        const formattedTags = response.map((tag: any) => ({
          value: tag.tags_id.toString(), // ใช้ `tags_id` แทน `id`
          label: tag.tags_name, // ใช้ `tags_name` แทน `name`
        }));
        setTags(formattedTags);
      } else {
        console.warn("Tags data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  // ✅ ฟังก์ชันแปลงรูปภาพเป็น Base64
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ ฟังก์ชันสร้าง Workspace และส่งข้อมูลไป API
  const handleCreateWorkspace = async () => {
    if (!workspaceName.trim()) {
      alert("Please enter a workspace name.");
      return;
    }

    try {
      // ดึงข้อมูล Base64, ไฟล์ไทป์ และชื่อไฟล์
      const base64Image = selectedImage?.split(",")[1] || "";
      const fileType = selectedImage?.match(/data:(.*?);base64/)?.[1] || "image/jpeg";

      const payload = {
        workspace_name: workspaceName,
        tags_list: selectedTags.map(tag => ({ tags_id: Number(tag.value) })), // ✅ แก้ให้ tags อยู่ในรูปแบบที่ API ต้องการ
        file_base64: base64Image,
        file_filename: "workspace_image.jpg",
        file_filetype: fileType,
      };

      const response = await GetdataAPI_Post("/api/Workspace/SaveWorkspace", payload);
      console.log("Workspace created:", response);
      onClose();
    } catch (error) {
      console.error("Error creating workspace:", error);
    }
  };

  const recommendedTags = tags.slice(0, 4);

  const handleTagChange = (selectedOptions: Tag[] | null) => {
    setSelectedTags(selectedOptions || []);
  };

  const removeTag = (tagValue: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.value !== tagValue));
  };

  const handleRecommendTag = (tag: Tag) => {
    setSelectedTags((prev) =>
      prev.some((t) => t.value === tag.value) ? prev : [...prev, tag]
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          maxWidth: 400,
          height: 750,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
    >
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <p className="text-lg font-bold">New Workspace</p>
        <button
          onClick={onClose}
          className="text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow px-6 overflow-y-auto">
        {/* Workspace Image with Camera Icon */}
        <div className="flex flex-col items-center space-y-4 p-6">
          <label
            htmlFor="image-upload"
            className="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer"
          >
            <img
              src={selectedImage || space}
              alt="Workspace"
              className="w-full h-full object-cover"
            />
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
          <p className="text-sm font-bold">Workspace image</p>
        </div>

        {/* Workspace Name Input */}
        <div className="w-full mt-6">
          <p className="text-sm font-bold p-1">Workspace name:</p>
          <input
            type="text"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder="e.g. My Workspace, Project Name"
            className="w-full border border-[#AFAFAF] rounded-lg p-3 text-sm px-4"
          />
        </div>

        {/* Tags Input */}
        <div className="w-full mt-4">
          <p className="text-sm font-bold p-1">Tags:</p>
          <Select
            options={tags}
            isMulti
            placeholder="Search and Select Tags..."
            onChange={(selectedOptions) =>
              handleTagChange(selectedOptions as Tag[] | null)
            }
            value={selectedTags}
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            className="mb-4"
          />

          <div className="flex flex-wrap gap-2 mt-4">
            {selectedTags.map((tag) => (
              <button
                key={tag.value}
                onClick={() => removeTag(tag.value)}
                className="px-[21px] py-2 text-xs rounded-lg bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6">
        <button
          onClick={handleCreateWorkspace}
          className="bg-black hover:bg-gray-800 text-white py-3 w-full rounded-lg"
        >
          Create
        </button>
      </div>
    </Dialog>
  );
};

export default HomeAddPopup;
