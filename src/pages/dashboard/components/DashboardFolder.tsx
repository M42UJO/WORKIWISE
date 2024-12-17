import { useState } from "react";
import DashboardSettingNewfolderPopup from "./newfolderpopup/DashboardSettingNewfolderPopup";
import DashboardSettingFolderPopup from "./settingfolderpopup.tsx/DashboardSettingFolderPopup";
import DashboardSettingDocumentPopup from "./settingdocumentpopup/DashboardSettingDocumentPopup";


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

function DashboardFolder() {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPopup, setCurrentPopup] = useState<string | null>(null);
  const [currentDocument, setCurrentDocument] = useState<string | null>(null);

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
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
          className="w-full  p-3 px-5 border border-gray-300 rounded-lg text-sm"
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
                <span className="mr-2">📁</span>
                <span className="truncate">{folder.name}</span>
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
                        <span className="mr-2 flex-shrink-0">{file.icon}</span>
                        <p className="truncate">{file.name}</p>
                      </div>
                      <button
                        onClick={() => setCurrentDocument(file.name)}
                        className="text-gray-600 hover:text-gray-600 text-2xl text-bold px-2 flex-shrink-0"
                      >
                        ...
                      </button>
                      <DashboardSettingDocumentPopup
                        open={currentDocument === file.name}
                        onClose={() => setCurrentDocument(null)}
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
