interface HeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
  
  export default function Header({ activeTab, setActiveTab }: HeaderProps) {
    return (
      <header
        className="rounded-md shadow-lg bg-white w-full px-6 pt-6 pb-0 border-b border-gray-300"
        style={{ marginBottom: "24px" }}
      >
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/30"
            alt="User Avatar"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="text-xl px-4 font-bold">PPE API setting</h1>
        </div>
  
        {/* Tab Buttons */}
        <div className="flex items-center space-x-4 ml-14">
          <button
            className={`px-2 py-2 font-semibold ${
              activeTab === "รายการ"
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("รายการ")}
          >
            รายการ
          </button>
          <button
            className={`px-2 py-2 font-semibold ${
              activeTab === "ตั้งค่าเอกสาร"
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("ตั้งค่าเอกสาร")}
          >
            ตั้งค่าเอกสาร
          </button>
        </div>
      </header>
    );
  }
  