import { useState } from "react";
import Header from "./components/Header";
import SettingList from "./components/SettingList";
import SettingEdit from "./components/SettingEdit";
;

export default function EditSetting() {
  const [activeTab, setActiveTab] = useState<string>("รายการ");

  return (
    <div className="flex h-screen p-4">
      <main className="flex-grow p-0 rounded-md shadow-lg bg-[#F5F6FB]">
        <div className="p-0">
          {/* Header */}
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Content Section */}
          {activeTab === "รายการ" ? <SettingList/> : <SettingEdit />}
        </div>
      </main>
    </div>
  );
}
