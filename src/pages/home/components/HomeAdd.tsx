import { useState } from "react";
import HomeAddPopup from "./HomeAddPopup";


export default function HomeAdd() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpen = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);

  return (
    <div>
      {/* Floating Action Button */}
      <div className="absolute bottom-4 right-4">
        <button
          className="flex items-center justify-center bg-gray-700 text-white rounded-full p-4 shadow-lg hover:bg-gray-800"
          aria-label="Add"
          onClick={handleOpen} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      {/* Add Workspace Popup */}
      <HomeAddPopup open={isPopupOpen} onClose={handleClose} />
    </div>
  );
}
