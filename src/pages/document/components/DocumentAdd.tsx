import React, { useState, useRef, useEffect } from "react";
import "react-quill/dist/quill.snow.css"; // ธีม Snow ของ Quill
import ReactQuill from "react-quill";

const DocumentAdd = () => {
  const [content, setContent] = useState("");
  const quillRef = useRef<ReactQuill | null>(null);

  const handleChange = (value: string) => {
    setContent(value);
  };

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor(); // เข้าถึง instance ของ Quill editor
      console.log(editor); // ทดสอบการเข้าถึง editor
    }
  }, []);

  return (
    <>
      {/* Editor */}
      <div className="w-3/4 h-[48rem] bg-white">
        <ReactQuill
          ref={quillRef} // ใช้ ref เพื่อหลีกเลี่ยง findDOMNode
          value={content}
          onChange={handleChange}
          theme="snow"
          className="h-full pb-10"
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
        />
      </div>
    </>
  );
};

export default DocumentAdd;
