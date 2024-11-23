import { useState } from "react";
import HomeSearchPopup from "./HomeSearchPopup";

export default function HomeSearch() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpen = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);

  return (
    <>
      {/* Search Button */}
      <div
        className="absolute top-4 right-4 m-6 cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex items-center bg-transparent border border-gray-300 text-gray-500 rounded-full py-2 px-3 shadow-sm hover:bg-gray-100 w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.4-6.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
          <p className="bg-transparent focus:outline-none text-sm text-gray-400 placeholder-gray-400 flex-grow w-0">
            Search
          </p>
        </div>
      </div>

      {/* Popup Component */}
      <HomeSearchPopup open={isPopupOpen} onClose={handleClose} />
    
      </>
  );
};

