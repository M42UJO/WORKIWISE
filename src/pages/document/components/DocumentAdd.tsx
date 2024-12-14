import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";
import Quill from "quill"; // Import Quill.js
import "quill/dist/quill.snow.css";

// Add Syntax Module
import QuillSyntax from "quill/modules/syntax";
Quill.register("modules/syntax", QuillSyntax);

const QuillEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  // Define Modules
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"], // Text styling
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
      [{ indent: "-1" }, { indent: "+1" }], // Indent
      [{ align: [] }], // Text alignment
      ["link", "image", "code-block"], // Links, images, and code blocks
      ["clean"], // Remove formatting
    ],
    syntax: {
      highlight: (text: string) => hljs.highlightAuto(text).value,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "script",
    "indent",
    "align",
    "link",
    "image",
    "code-block",
  ];

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="flex ">
      <div className="w-full ">
        <ReactQuill
          value={content}
          // onChange={handleContentChange}
          modules={modules}
          formats={formats}
          theme="snow"
          style={{ height: "724px" }}
        />
      </div>
    </div>
  );
};

export default QuillEditor;
