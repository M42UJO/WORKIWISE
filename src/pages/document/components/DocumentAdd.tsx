import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // ธีม Snow ของ Quill
import ReactQuill from "react-quill";

const DocumentAdd = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="w-full h-[600px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
      {/* Header */}
     

      {/* Editor */}
      <div className="flex-1 p-4 overflow-y-auto">
        <ReactQuill
          value={content}
          onChange={handleChange}
          theme="snow"
          placeholder="Start typing your content here..."
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"], // ตัวหนา, เอียง, ขีดเส้นใต้, ขีดทับ
              [{ list: "ordered" }, { list: "bullet" }], // ลิสต์ตัวเลข, ลิสต์จุด
              [{ header: [1, 2, 3, false] }], // ระดับหัวข้อ
              [{ align: [] }], // จัดตำแหน่ง
              [{ color: [] }, { background: [] }], // สีตัวอักษรและสีพื้นหลัง
              ["link", "image"], // ลิงก์และรูปภาพ
              ["clean"], // ล้างฟอร์แมต
            ],
          }}
          formats={[
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "header",
            "align",
            "color",
            "background",
            "link",
            "image",
          ]}
          className="h-full"
        />
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 p-3 bg-gray-50 flex justify-end">
        <button
          type="button"
          onClick={() => console.log(content)} // สามารถปรับการบันทึกข้อมูล
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DocumentAdd;
