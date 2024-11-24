import React from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import space from "../../../assets/img/space.png";

interface HomeAddPopupProps {
  open: boolean;
  onClose: () => void;
}

const HomeAddPopup: React.FC<HomeAddPopupProps> = ({ open, onClose }) => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [workspaceName, setWorkspaceName] = React.useState<string>("");
  const availableTags = ["API", "Finance", "Mobile", "Computer","Computer", "API", "Finance", "Mobile","Computer", "API", "Finance", "Mobile"];

  const toggleTagSelection = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleCreate = () => {
    if (!workspaceName.trim()) {
      alert("Workspace name is required.");
      return;
    }
    // Implement workspace creation logic here
    alert(`Workspace "${workspaceName}" created with tags: ${selectedTags.join(", ")}`);
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
        <p className="text-lg font-bold ">New Workspace</p>
        <button
          onClick={onClose}
          className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow px-6  overflow-y-auto">
        {/* Workspace Image */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-28 h-28 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={space}
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </div>
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
            className="w-full border rounded-lg p-3 text-sm px-4"
          />
        </div>

        {/* Tags Input */}
        <div className="w-full mt-4">
          <p className="text-sm font-bold p-1">Tags:</p>
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-lg p-3 text-sm px-4 mb-2"
          />
          <div className="flex flex-wrap gap-2 justify-center overflow-y-auto mt-4">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTagSelection(tag)}
                className={`px-5 py-2 text-xs rounded-lg border border-black ${
                  selectedTags.includes(tag)
                    ? "bg-black text-white"
                    : "bg-white text-black border-black"
                } hover:bg-gray-200 transition-colors`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6">
        <button
          onClick={handleCreate}
          className="bg-black hover:bg-gray-800 text-white py-3 w-full rounded-lg"
        >
          Create
        </button>
      </div>
    </Dialog>
  );
};

export default HomeAddPopup;
