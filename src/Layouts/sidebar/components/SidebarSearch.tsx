import { useState } from "react";

interface SidebarSearchProps {
  onClose: () => void;
}

export default function SidebarSearch({ onClose }: SidebarSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    "Home",
    "User's Workspace",
    "User's Workspace 2",
    "Change password",
  ];

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-[#11111D] text-white shadow-lg z-50 px-6">
      {/* Header with Search Input */}
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
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 text-white hover:bg-gray-700 rounded-md cursor-pointer"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="py-2 px-4 text-gray-400">No results found</li>
        )}
      </ul>
    </div>
  );
}
