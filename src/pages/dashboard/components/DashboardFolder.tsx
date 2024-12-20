import { useState } from "react";
import DashboardSettingNewfolderPopup from "./newfolderpopup/DashboardSettingNewfolderPopup";
import DashboardSettingFolderPopup from "./settingfolderpopup.tsx/DashboardSettingFolderPopup";
import DashboardSettingDocumentPopup from "./settingdocumentpopup/DashboardSettingDocumentPopup";
type Folder = {
  name: string;
  color: string;
  files: { icon: JSX.Element; name: string }[];
};
interface FolderIconProps {
  color?: string;
}
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
function DashboardFolder() {
  const [folders, setFolders] = useState<Folder[]>(initialFolders);
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPopup, setCurrentPopup] = useState<string | null>(null);
  const [currentDocument, setCurrentDocument] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  // Add move file function
  const moveFile = (sourceFolder: string, targetFolder: string, fileName: string) => {
    console.log("Moving file:", fileName, "from", sourceFolder, "to", targetFolder);
    setFolders(prevFolders => {
      const fileToMove = prevFolders
        .find(folder => folder.name === sourceFolder)
        ?.files.find(file => file.name === fileName);
      if (!fileToMove) return prevFolders;
      return prevFolders.map(folder => {
        if (folder.name === sourceFolder) {
          return {
            ...folder,
            files: folder.files.filter(file => file.name !== fileName)
          };
        }
        if (folder.name === targetFolder) {
          return {
            ...folder,
            files: [...folder.files, fileToMove]
          };
        }
        return folder;
      });
    });
  };
  const deleteFile = (folderName: string, fileName: string) => {
    console.log("Deleting file:", fileName, "from folder:", folderName);
    setFolders(prevFolders =>
      prevFolders.map(folder =>
        folder.name === folderName
          ? { ...folder, files: folder.files.filter(file => file.name !== fileName) }
          : folder
      )
    );
    setCurrentDocument(null);
  };
  const deleteFolder = (folderName: string) => {
    console.log("Deleting folder:", folderName);
    setFolders(prevFolders => prevFolders.filter(folder => folder.name !== folderName));
    setCurrentPopup(null); // Close the popup after deletion
  };
  const renameFolder = (oldName: string, newName: string) => {
    console.log("Renaming folder from", oldName, "to", newName);
    setFolders(prevFolders =>
      prevFolders.map(folder =>
        folder.name === oldName
          ? { ...folder, name: newName }
          : folder
      )
    );
  };
  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };
  const updateFolderColor = (folderName: string, newColor: string) => {
    setFolders(prevFolders =>
      prevFolders.map(folder =>
        folder.name === folderName
          ? { ...folder, color: newColor }
          : folder
      )
    );
  };
  const filteredFolders = folders.filter(
    (folder) =>
      folder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      folder.files.some((file) =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
  return (
    <>
      {/* Search Bar */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 px-5 border border-gray-300 rounded-lg text-sm"
        />
        <button
          onClick={() => setCurrentPopup("newFolder")}
          type="submit"
          className="w-10 p-3 border border-gray-300 bg-white rounded-lg text-sm flex-shrink-0"
        >
          +
        </button>
        <DashboardSettingNewfolderPopup
          open={currentPopup === "newFolder"}
          onClose={() => setCurrentPopup(null)}
        />
      </div>
      {/* File Explorer */}
      <div className="w-full overflow-x-auto">
        {filteredFolders.map((folder) => (
          <div key={folder.name}>
            {/* Folder Header */}
            <div className="flex items-center justify-between p-3 md:p-4 w-full text-gray-700 text-sm font-medium cursor-pointer hover:bg-[#CECECE] border-b-2">
              <button
                onClick={() => toggleFolder(folder.name)}
                className="flex items-center w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 md:w-5 h-4 md:h-5 mr-2 transition-transform ${openFolders[folder.name] ? "rotate-90" : "rotate-0"
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
              </button>
              <button
                onClick={() => setCurrentPopup(folder.name)}
                className="text-gray-600 hover:text-gray-600 text-2xl text-bold px-2"
              >
                ...
              </button>
            </div>
            <DashboardSettingFolderPopup
              open={currentPopup === folder.name}
              onClose={() => setCurrentPopup(null)}
              folderName={folder.name}
              onColorChange={updateFolderColor}
              onRename={renameFolder}
              onDelete={deleteFolder}
            />
            {/* Files Inside Folder */}
            {openFolders[folder.name] && folder.files.length > 0 && (
              <div className="bg-white">
                {folder.files
                  .filter((file) =>
                    file.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full p-3 md:p-4 border-b-2 pl-12 md:pl-16 bg-gray-100 hover:bg-[#CECECE]"
                    >
                      <div className="flex items-center min-w-0">
                        {file.icon}
                        <p className="truncate ml-2">{file.name}</p>
                      </div>
                      <button
                        onClick={() => {
                          setCurrentDocument(file.name);
                          setSelectedFolder(folder.name);
                        }}
                        className="text-gray-600 hover:text-gray-600 text-2xl text-bold px-2 flex-shrink-0"
                      >
                        ...
                      </button>
                      <DashboardSettingDocumentPopup
                        open={currentDocument === file.name}
                        onClose={() => setCurrentDocument(null)}
                        folderName={selectedFolder || ""}
                        fileName={file.name}
                        onDeleteFile={deleteFile}
                        onMoveFile={moveFile}
                      />
                    </div>
                  ))}
              </div>
            )}
            {openFolders[folder.name] && folder.files.length === 0 && (
              <div className="px-12 md:px-16 py-4 text-gray-500 text-sm">
                No files available.
              </div>
            )}
          </div>
        ))}
        {filteredFolders.length === 0 && (
          <div className="px-4 py-2 text-gray-500 text-sm">No results found.</div>
        )}
      </div>
    </>
  );
}
export default DashboardFolder;