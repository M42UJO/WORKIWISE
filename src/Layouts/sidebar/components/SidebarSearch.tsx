import { useEffect, useState } from "react";
import { GetdataAPI_Get } from "../../../MainCall";

interface SidebarSearchProps {
  onClose: () => void;
}

interface Workspace {
  space_id: number;
  space_name: string;
}

export default function SidebarSearch({ onClose }: SidebarSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [Workspace_Search, setWorkspace_Search] = useState<Workspace[]>([]);

  async function fetchData() {
    try {
      const response = await GetdataAPI_Get("/api/Workspace/GetWorkspace");

      if (Array.isArray(response)) {
        setWorkspace_Search(response);
      } else {
        console.warn("Data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching workspaces:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredItems = Workspace_Search.filter((workspace) =>
    workspace.space_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-[#11111D] text-white shadow-lg z-50 px-6">
 
      <div className="flex items-center pt-6 border-b border-white">
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder=" Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 text-white bg-transparent focus:outline-none"
        />
      </div>
      <p className="font-bold py-2">Recent</p>

      {/* Menu Items */}
      <ul className="space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((workspace) => (
            <li
              key={workspace.space_id}
              className="py-2 px-4 text-white hover:bg-gray-700 rounded-md cursor-pointer"
            >
              {workspace.space_name}
            </li>
          ))
        ) : (
          <li className="py-2 px-4 text-gray-400">No results found</li>
        )}
      </ul>
    </div>
  );
}
