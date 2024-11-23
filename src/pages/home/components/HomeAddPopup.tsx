import React from "react";
import { Dialog, DialogContent, DialogTitle, TextField, Button, Chip } from "@mui/material";

interface HomeAddPopupProps {
  open: boolean;
  onClose: () => void;
}

const HomeAddPopup: React.FC<HomeAddPopupProps> = ({ open, onClose }) => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const availableTags = ["API", "Finance", "Mobile", "Computer"];

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <p className="text-lg font-semibold text-gray-600">New Workspace</p>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col items-center space-y-4">
          {/* Workspace Image */}
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center relative">
            <img
              src="https://via.placeholder.com/100" // Placeholder image
              alt="Workspace"
              className="rounded-full w-full h-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              <span role="img" aria-label="camera">
                📸
              </span>
            </button>
          </div>
          <p className="text-sm text-gray-500">Workspace image</p>

          {/* Workspace Name Input */}
          <TextField
            label="Workspace name"
            placeholder="e.g. My Workspace, Project Name"
            variant="outlined"
            fullWidth
          />

          {/* Tags Input */}
          <div className="w-full">
            <TextField
              label="Tags"
              placeholder="Search"
              variant="outlined"
              fullWidth
              className="mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onClick={() => handleTagClick(tag)}
                  color={selectedTags.includes(tag) ? "primary" : "default"}
                  clickable
                />
              ))}
            </div>
          </div>

          {/* Create Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onClose}
            className="!mt-4"
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HomeAddPopup;
