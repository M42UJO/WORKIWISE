interface SidebarSearchProps {
  onClose: () => void;
}

export default function SidebarSearch({ onClose }: SidebarSearchProps) {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-[#11111D] text-white shadow-lg z-50">
      {/* Header with Search Input */}
      <div className="flex items-center p-4 border-b border-gray-700">
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
          placeholder="Search..."
          className="ml-4 w-full px-3 py-2 text-white bg-transparent focus:outline-none"
        />
      </div>

      {/* Menu Items */}
      <div className="mt-4">
        <ul className="space-y-2 px-4">
          <li className="py-2 text-white hover:bg-gray-700 rounded-md cursor-pointer">
            Home
          </li>
          <li className="py-2 text-white hover:bg-gray-700 rounded-md cursor-pointer">
            User's Workspace
          </li>
          <li className="py-2 text-white hover:bg-gray-700 rounded-md cursor-pointer">
            User's Workspace 2
          </li>
          <li className="py-2 text-white hover:bg-gray-700 rounded-md cursor-pointer">
            Change password
          </li>
        </ul>
      </div>
    </div>
  );
}
