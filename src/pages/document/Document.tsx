import DocumentAdd from "./components/DocumentAdd";
import DocumentFile from "./components/DocumentFile";
import DocumentHeader from "./components/DocumentHeader";

function Document() {
  return (
    <>
    <main>
      <div className="px-6">
      <DocumentHeader />
      </div>
      <div className="p-6  flex gap-6">

        {/* Document Add Section */}
        <DocumentAdd />

        {/* Document File Section */}
        <DocumentFile />
      </div>
      </main>
    </>
  );
}

export default Document;
