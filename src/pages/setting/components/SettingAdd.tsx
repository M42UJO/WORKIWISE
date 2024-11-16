import { useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";

export default function SettingAdd() {
  const [activeTab, setActiveTab] = useState<string>("เพิ่มรายการ");
  const [content, setContent] = useState<string>("");

  // กำหนดประเภทของ content ในฟังก์ชัน handleEditorChange
  const handleEditorChange = (content: string) => {
    setContent(content);
  };

  return (
    <div className="flex h-screen p-4">


      <main className="flex-grow p-0 rounded-md shadow-lg bg-[#F5F6FB]">
        <div className="p-0">
          {/* Header */}
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
                  activeTab === "เพิ่มรายการ"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("เพิ่มรายการ")}
              >
                เพิ่มรายการ
              </button>
            </div>
          </header>

          {/* Content Section */}
          <section className="p-6 rounded-lg shadow-md m-6 bg-[#FFFFFF]">
            {/* Input Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                ชื่อรายการ :
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ชื่อรายการ"
                className="w-full p-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* TinyMCE Editor */}
            <div className="mb-6">
              <Editor
                apiKey="YOUR_TINYMCE_API_KEY" // ใส่ API Key ของ TinyMCE ที่นี่
                value={content}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex justify-end space-x-4">
              <Link
                to={"/EditSetting"}
                className="bg-[#AFAFAF] text-center text-white py-4 px-6 w-2/4 rounded-md"
              >
                ยกเลิก
              </Link>
              <button className="bg-black text-white py-4 px-6 w-2/4 rounded-md">
                บันทึก
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
