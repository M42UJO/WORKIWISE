import { useState } from "react";
import DocumentAdd from "./components/DocumentAdd";
import DocumentFile from "./components/DocumentFile";
import DocumentHeader from "./components/DocumentHeader";

function Document() {
  const [currentContent, setCurrentContent] = useState("");
  const [fileName, setFileName] = useState("exported-content.html");

  const handleExportHTML = () => {
    console.log('Exporting HTML:', currentContent);
    const fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fileName.replace('.html', '')}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
</head>
<body>
  ${currentContent}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>
</body>
</html>`;

    const blob = new Blob([fileContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'exported-content.html'; // ตั้งชื่อไฟล์จาก state
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <main>
        <div className="flex justify-between text-lg font-bold px-6">
          <DocumentHeader />
        </div>
        <div className="p-6 flex gap-6">
          <div className="w-3/4 h-[48rem] bg-white rounded-lg">
            <DocumentAdd onExportContent={setCurrentContent} />
          </div>
          <div className="w-1/4 bg-white p-6 rounded-lg shadow-md h-[48rem] flex flex-col">
            <DocumentFile onSetFileName={setFileName} />
            <button 
              onClick={handleExportHTML}
              className="bg-black hover:bg-gray-800 text-white py-3 w-full rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Document;
