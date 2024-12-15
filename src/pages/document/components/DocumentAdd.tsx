import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";
import Quill from "quill"; 
import "quill/dist/quill.snow.css";

// Add Syntax Module
import QuillSyntax from "quill/modules/syntax";
Quill.register("modules/syntax", QuillSyntax);

const QuillEditor: React.FC = () => {

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"], 
      [{ list: "ordered" }, { list: "bullet" }], 
      [{ script: "sub" }, { script: "super" }], 
      [{ indent: "-1" }, { indent: "+1" }], 
      [{ align: [] }], 
      ["link", "image", "code-block"], 
      ["clean"], 
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


  return (
    <div className="flex ">
      <div className="w-full ">
        <ReactQuill
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
