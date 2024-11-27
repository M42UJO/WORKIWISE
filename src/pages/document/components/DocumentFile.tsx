import ButtonSave from "../../../components/ButtonSave";

const DocumentFile = () => {
  const files = [
    { name: "Api test.pdf", date: "9/9/2024", type: "PDF" },
    { name: "Flow.doc", date: "9/9/2024", type: "DOC" },
    { name: "Apiiiiii test.pdf", date: "9/9/2024", type: "PDF" },
    { name: "Flowwww.doc", date: "9/9/2024", type: "DOC" },
  ];

  return (
    <div className="w-1/4 bg-white p-6 rounded-lg shadow-md h-[48rem] flex flex-col">
      {/* Header */}
      <div className="flex mb-6">
      <p className="text-lg  mr-2">In</p>
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
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  {files.map((file, index) => (
    <div
      key={index}
      className="flex items-center justify-between p-1 px-2 border border-gray-200 rounded-md shadow-sm bg-gray-50"
    >
      {/* File Type Icon */}
      <div className="flex items-center">
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-medium ${
            file.type === "PDF" ? "bg-red-500" : "bg-blue-500"
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
    </div>
  );
};

export default DocumentFile;
