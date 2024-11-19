import { useState } from "react";

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
];

function DashboardFolder() {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <div className="mt-8">
      {/* Search Bar */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-[40rem] p-2 px-5 border border-gray-300 rounded-lg text-sm"
        />
        <button
          type="submit"
          className="w-10 p-2 border border-gray-300 bg-white rounded-lg text-sm"
        >
          +
        </button>
      </div>

      {/* File Explorer */}
      <div className="space-y-2">
        {folders.map((folder) => (
          <div key={folder.name}>
            {/* Folder Header */}
            <div className="flex items-center justify-between p-4 w-full text-gray-700 text-sm font-medium cursor-pointer hover:text-gray-900 border-b-2">
              <button
                onClick={() => toggleFolder(folder.name)}
                className="flex items-center"
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
                {/* Folder Icon */}
                <span className="mr-2">📁</span> {folder.name}
              </button>
              {/* Three Dots */}
              <button className="text-gray-600 hover:text-gray-600 text-2xl text-boid">...</button>
            </div>

            {/* Files Inside Folder */}
            {openFolders[folder.name] && folder.files.length > 0 && (
              <div className="space-y-2">
                {folder.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-full p-4 border-b-2 pl-16"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{file.icon}</span>
                      <p>{file.name}</p>
                    </div>
                    {/* Three Dots */}
                    <button className="text-gray-600 hover:text-gray-600 text-2xl text-boid">
                      ...
                    </button>
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
      </div>
    </div>
  );
}

export default DashboardFolder;
