import { useState } from "react";
import DocumentAdd from "./components/DocumentAdd";
import DocumentFile from "./components/DocumentFile";
import DocumentHeader from "./components/DocumentHeader";
interface FileData {
  name: string;
  date: string;
  type: string;
  content?: string;
}
function Document() {
  const [currentContent, setCurrentContent] = useState("");
  const [fileName, setFileName] = useState("exported-content.html");
  const [attachedFiles, setAttachedFiles] = useState<FileData[]>([]);
  const handleExportHTML = () => {
    console.log('Exporting HTML with attachments');
    
    // Create attachments section
    const attachmentsSection = attachedFiles
      .filter(file => file.content)
      .map(file => `
        <div class="attachment">
          <h3>Attachment: ${file.name}</h3>
          ${file.type.toLowerCase().includes('image') 
            ? `<img src="${file.content}" alt="${file.name}" style="max-width: 100%; height: auto;">` 
            : `<a href="${file.content}" download="${file.name}">Download ${file.name}</a>`
          }
        </div>
      `).join('\n');
    const fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fileName.replace('.html', '')}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
  <style>
    .attachment {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .attachment h3 {
      margin: 0 0 10px 0;
      color: #333;
    }
  </style>
</head>
<body>
  ${currentContent}
  
  ${attachedFiles.length > 0 ? '<h2>Attachments</h2>' : ''}
  ${attachmentsSection}
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>
</body>
</html>`;
    const blob = new Blob([fileContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'exported-content.html';
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
            <DocumentFile 
              onSetFileName={setFileName} 
              onFilesChange={setAttachedFiles}
            />
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