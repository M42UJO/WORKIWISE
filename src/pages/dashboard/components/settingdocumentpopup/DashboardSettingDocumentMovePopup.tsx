
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import ButtonSave from "../../../../components/ButtonSave";

interface DashboardSettingDocumentMovePopupProps {open: boolean;onClose: () => void;}

type Folder = {
  name: string;
  files: { icon: string; name: string }[];
};

const folders: Folder[] = [
  {
    name: "Folder A",
    files: [
      { icon: "📄", name: "aaa.doc" },
      { icon: "📋", name: "aaa" },
    ],
  },
  {
    name: "Folder B",
    files: [],
  },
  {
    name: "Folder C",
    files: [{ icon: "📂", name: "test.pdf" }],
  },
];

const DashboardSettingDocumentMovePopup: React.FC<DashboardSettingDocumentMovePopupProps> = ({open,onClose,}) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
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
          <p className="mr-auto text-lg">aaa.doc</p>
          <button
            onClick={onClose}
            className=" right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full p-1"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* File Explorer */}
        <div className="mt-4 mb-6">
          {folders.map((folder) => (
            <div key={folder.name}>
              {/* Folder Header */}
              <div className="flex items-center justify-between p-4 w-full text-gray-700 text-sm font-medium cursor-pointer hover:bg-[#CECECE] border-b-2">
                <button
                  onClick={() => toggleFolder(folder.name)}
                  className="flex items-center w-full "
                >
                  {/* Arrow Icon */}
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
                  <span className="mr-2">📁</span> {folder.name}
                </button>
              </div>

              {/* Files Inside Folder */}
              {openFolders[folder.name] && folder.files.length > 0 && (
                <div className="">
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

          {folders.length === 0 && (
            <div className="px-4 py-2 text-gray-500 text-sm">No results found.</div>
          )}
        </div>

        <ButtonSave />
      </div>
    </Dialog>
  );
};

export default DashboardSettingDocumentMovePopup;
