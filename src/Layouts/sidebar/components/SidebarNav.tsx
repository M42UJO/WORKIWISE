import { useState } from "react";

export default function SidebarNav() {
  // State สำหรับควบคุมการแสดง/ซ่อนเมนูย่อยของ Workspace
  const [isWorkspaceOpen, setWorkspaceOpen] = useState(false);

  return (
    <nav className="flex-1 px-4">
      <ul className="space-y-2">
        {/* Home */}
        <li>
          <a
            href="#"
            className="flex items-center p-3 rounded-md hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="text-white font-medium">Home</span>
          </a>
        </li>

        {/* Workspace */}
        <li>
          <button
            onClick={() => setWorkspaceOpen(!isWorkspaceOpen)} // Toggle เปิด/ปิด Dropdown
            className="flex items-center w-full text-left p-3 rounded-md hover:bg-gray-700 transition focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
              />
            </svg>
            <span className="text-white font-medium">Workspace</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-5 ml-auto transition-transform ${
                isWorkspaceOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 9l-7.5 7.5L4.5 9"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {isWorkspaceOpen && ( // แสดงเมนูย่อยเฉพาะเมื่อ isWorkspaceOpen = true
            <ul className="ml-4 mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700 transition"
                >
                  User's Workspace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-700 transition"
                >
                  User's Workspace 2
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
