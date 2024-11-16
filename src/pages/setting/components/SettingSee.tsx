import { useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";

export default function SeeSetting() {

  const [content, setContent] = useState<string>("");

  const handleEditorChange = (content: string) => {
    setContent(content);
  };

  return (
    <div className="flex h-screen p-4">


      <main
        className="flex-grow p-0 rounded-md shadow-lg"
        style={{ backgroundColor: "#F5F6FB" }}
      >
        <div className="p-0">
          {/* Header */}
          <header
            className="rounded-md shadow-lg bg-white w-full px-6 pt-6 pb-0 border-b border-gray-300"
            style={{ marginBottom: "24px" }}
          >
            <div className="flex items-center justify-between">
              {/* Left Side Content */}
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User Avatar"
                  className="h-12 w-12 rounded-full"
                />
                <h1 className="text-xl px-4 font-bold">PPE API Setting</h1>
              </div>

              {/* Right Side Link */}
              <Link
                to={"/EditSetting"}
                className="text-black text-xl font-semibold mr-6"
              >
                ปิด
              </Link>
            </div>

            {/* Tab Buttons */}
            <div className="flex items-center space-x-4 ml-14 mt-4">
              <button className="px-2 font-semibold text-black text-md border-b-2 border-black">
                API Setting V.1
              </button>
            </div>
          </header>

          {/* Content Section */}
          <section className="p-6 rounded-lg shadow-md m-6 bg-[#FFFFFF] h-full">
            {/* TinyMCE Editor */}
            <div className="mb-6">
              <Editor
                apiKey="YOUR_TINYMCE_API_KEY" // แทนที่ด้วย API Key ของคุณ
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
          </section>
        </div>
      </main>
    </div>
  );
}
