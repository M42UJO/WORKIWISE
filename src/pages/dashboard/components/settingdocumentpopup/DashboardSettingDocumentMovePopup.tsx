import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../../components/ButtonSave";
interface DashboardSettingDocumentMovePopupProps {
  open: boolean;
  onClose: () => void;
  sourceFolder: string;
  fileName: string;
  onMoveFile?: (sourceFolder: string, targetFolder: string, fileName: string) => void;
}
interface FolderIconProps {
  color?: string;
}
type Folder = {
  name: string;
  color: string;
  files: { icon: JSX.Element; name: string }[];
};
const FolderIcon: React.FC<FolderIconProps> = ({ color = "#F59E0B" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 4h5l2 3h11v13H3z" />
    <path d="M3 8h18" />
  </svg>
);
const FileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-500"
  >
    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M14 2v6h6" />
  </svg>
);
const initialFolders: Folder[] = [
  {
    name: "Folder A",
    color: "#F59E0B",
    files: [
      { icon: <FileIcon />, name: "aaa.doc" },
      { icon: <FileIcon />, name: "aaa" },
    ],
  },
  {
    name: "Folder B",
    color: "#339CFF",
    files: [],
  },
  {
    name: "Folder C",
    color: "#44FF33",
    files: [{ icon: <FileIcon />, name: "test.pdf" }],
  },
];
const DashboardSettingDocumentMovePopup: React.FC<DashboardSettingDocumentMovePopupProps> = ({
  open,
  onClose,
  sourceFolder,
  fileName,
  onMoveFile,
}) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };
  const handleMove = () => {
    if (selectedFolder && onMoveFile) {
      onMoveFile(sourceFolder, selectedFolder, fileName);
      onClose();
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
          <p className="text-lg font-bold mr-2">Move</p>
          <p className="mr-auto text-lg">{fileName}</p>
          <button
            onClick={onClose}
            className="right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        {/* File Explorer */}
        <div className="mt-4 mb-6">
          {initialFolders.map((folder) => (
            <div key={folder.name}>
              {/* Folder Header */}
              <div
                className={`flex items-center justify-between p-4 w-full text-gray-700 text-sm font-medium cursor-pointer hover:bg-[#CECECE] border-b-2 ${
                  selectedFolder === folder.name ? 'bg-[#CECECE]' : ''
                }`}
                onClick={() => {
                  toggleFolder(folder.name);
                  setSelectedFolder(folder.name);
                }}
              >
                <div className="flex items-center w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-5 h-5 mr-2 transition-transform ${
                      openFolders[folder.name] ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <FolderIcon color={folder.color} />
                  <span className="truncate ml-2">{folder.name}</span>
                </div>
              </div>
              {/* Files Inside Folder */}
              {openFolders[folder.name] && folder.files.length > 0 && (
                <div>
                  {folder.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full p-3 border-b-2 pl-16 hover:bg-[#CECECE]"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{file.icon}</span>
                        <p>{file.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {openFolders[folder.name] && folder.files.length === 0 && (
                <div className="px-16 py-4 text-gray-500 text-sm">
                  No files available.
                </div>
              )}
            </div>
          ))}
          {initialFolders.length === 0 && (
            <div className="px-4 py-2 text-gray-500 text-sm">
              No results found.
            </div>
          )}
        </div>
        <button
          onClick={handleMove}
          disabled={!selectedFolder || selectedFolder === sourceFolder}
          className={`py-3 w-full rounded-lg ${
            !selectedFolder || selectedFolder === sourceFolder
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-black hover:bg-gray-800 text-white'
          }`}
        >
          Move
        </button>
      </div>
    </Dialog>
  );
};
export default DashboardSettingDocumentMovePopup;