const DocumentFile = () => {
    const files = [
      { name: "Api test.pdf", date: "9/9/2024", type: "PDF" },
      { name: "Flow.doc", date: "9/9/2024", type: "DOC" },
    ];
  
    return (
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          In User's Workspace
        </h2>
  
        {/* Document Name Input */}
        <div className="mb-6">
          <label
            htmlFor="document-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Document name:
          </label>
          <input
            type="text"
            id="document-name"
            placeholder="Please enter document name"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Upload Attachment Button */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attachment
          </label>
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-md text-gray-500 focus:outline-none"
          >
            Upload Attachment
          </button>
        </div>
  
        {/* File List */}
        <div className="space-y-4 mb-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-md shadow-sm bg-gray-50"
            >
              {/* File Type Icon */}
              <div className="flex items-center">
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-medium ${
                    file.type === "PDF" ? "bg-red-500" : "bg-blue-500"
                  }`}
                >
                  {file.type}
                </span>
                {/* File Details */}
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.date}</p>
                </div>
              </div>
              {/* Delete Button */}
              <button
                type="button"
                className="text-gray-400 hover:text-red-500"
                aria-label="Delete file"
              >
                &#x2715;
              </button>
            </div>
          ))}
        </div>
  
        {/* Save Button */}
        <button
          type="button"
          className="w-full px-4 py-3 bg-black text-white text-sm font-medium rounded-md shadow hover:bg-gray-800 focus:outline-none"
        >
          Save
        </button>
      </div>
    );
  };
  
  export default DocumentFile;
  