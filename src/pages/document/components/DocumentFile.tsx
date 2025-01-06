import { useState } from "react";
import bin from "/src/assets/img/binn.png";
interface FileData {
  name: string;
  date: string;
  type: string;
  content?: string; // Base64 content
}
const DocumentFile = ({ 
  onSetFileName, 
  onFilesChange 
}: { 
  onSetFileName: (name: string) => void;
  onFilesChange: (files: FileData[]) => void;
}) => {
  const [files, setFiles] = useState<FileData[]>([
    { name: "Api test.pdf", date: "9/9/2024", type: "PDF" },
    { name: "Flow.doc", date: "9/9/2024", type: "DOC" },
  ]);
  const [documentName, setDocumentName] = useState("");
  const handleDocumentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setDocumentName(name);
    onSetFileName(name);
  };
  const truncateFileName = (name: string, maxLength: number = 13) => {
    return name.length > maxLength ? `${name.substring(0, maxLength)}..` : name;
  };
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = await Promise.all(
        Array.from(e.target.files).map(async (file) => {
          const base64Content = await convertFileToBase64(file);
          return {
            name: file.name,
            date: new Date().toLocaleDateString(),
            type: file.name.split(".").pop()?.toUpperCase() || "Unknown",
            content: base64Content
          };
        })
      );
      
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onFilesChange(updatedFiles);
    }
  };
  const handleDelete = (fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex mb-6">
        <p className="text-lg mr-2">In</p>
        <p className="mr-auto font-bold text-lg">User's Workspace</p>
      </div>
      <div className="mb-4">
        <label
          htmlFor="document-name"
          className="block text-sm font-bold text-gray-700 mb-2"
        >
          <span className="text-black font-bold">Document name</span> :
        </label>
        <input
          type="text"
          id="document-name"
          value={documentName}
          onChange={handleDocumentNameChange}
          placeholder="Please enter document name"
          className="w-full p-3 border border-[#AFAFAF] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Attachment
        </label>
        <div className="w-full p-6 border-dashed border-2 rounded-md text-center">
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
            disabled={files.length >= 14}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-gray-500 hover:text-blue-500"
          >
            <span className="block text-lg">&#8593; Upload Attachment</span>
          </label>
          {files.length >= 14 && (
            <p className="text-sm text-red-500 mt-2">You can upload up to 14 files only.</p>
          )}
        </div>
      </div>
      <div className="flex-grow mb-4">
        <div className="grid grid-cols-2 gap-1">
          {files.slice(0, 14).map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded-md shadow-sm"
            >
              <div className="flex items-center">
                <span
                  className={`w-8 h-8 p-4 flex items-center justify-center rounded text-white text-xs font-medium ${
                    file.type === "PDF" ? "bg-red-500" : "bg-blue-500"
                  }`}
                >
                  {file.type}
                </span>
                <div className="ml-2">
                  <p className="text-xs font-medium text-gray-900 truncate">
                    {truncateFileName(file.name)}
                  </p>
                  <p className="text-xs text-gray-500">{file.date}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(file.name)}
                className="text-gray-400 hover:text-red-500"
                aria-label="Delete file"
              >
                <img
                  src={bin}
                  alt="bin icon"
                  className="w-4"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DocumentFile;