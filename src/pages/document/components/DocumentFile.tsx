import { useState } from "react";
import ButtonSave from "../../../components/ButtonSave";

const DocumentFile = () => {
  const [files, setFiles] = useState([
    { name: "Api test.pdf", date: "9/9/2024", type: "PDF" },
    { name: "Flow.doc", date: "9/9/2024", type: "DOC" },
    { name: "Apiiiiii test.pdf", date: "9/9/2024", type: "PDF" },
    { name: "Flowwww.doc", date: "9/9/2024", type: "DOC" },
  ]);
  
  const [documentName, setDocumentName] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  // Handle document name input change
  const handleDocumentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentName(e.target.value);
  };

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
  };

  // Handle file upload
  const handleFileUpload = () => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).map((file) => ({
        name: file.name,
        date: new Date().toLocaleDateString(),
        type: file.name.split('.').pop()?.toUpperCase() || "Unknown",
      }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  // Handle file delete
  const handleDelete = (fileName: string) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  return (
    <>
      {/* Header */}
      <div className="flex mb-6">
        <p className="text-lg mr-2">In</p>
        <p className="mr-auto font-bold text-lg">User's Workspace</p>
      </div>

      {/* Document Name Input */}
      <div className="mb-6">
        <label
          htmlFor="document-name"
          className="block text-sm font-bold text-gray-700 mb-2"
        >
          Document name :
        </label>
        <input
          type="text"
          id="document-name"
          value={documentName}
          onChange={handleDocumentNameChange}
          placeholder="Please enter document name"
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Upload Attachment Button */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Attachment
        </label>
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="button"
        onClick={handleFileUpload}
        className="w-full flex items-center justify-center px-4 py-2 border-2 border-solid border-blue-500 rounded-md text-blue-500 hover:bg-blue-50"
      >
        Upload Attachment
      </button>

      {/* File List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-1 px-2 border border-gray-200 rounded-md shadow-sm bg-gray-50"
          >
            {/* File Type Icon */}
            <div className="flex items-center">
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-medium ${file.type === "PDF" ? "bg-red-500" : "bg-blue-500"
                  }`}
              >
                {file.type}
              </span>
              {/* File Details */}
              <div className="ml-1">
                <p className="text-xs font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500">{file.date}</p>
              </div>
            </div>
            {/* Delete Button */}
            <button
              type="button"
              onClick={() => handleDelete(file.name)}
              className="text-gray-400 hover:text-red-500"
              aria-label="Delete file"
            >
              &#x2715;
            </button>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-auto">
        <ButtonSave />
      </div>
    </>
  );
};

export default DocumentFile;
