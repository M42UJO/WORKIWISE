import DocumentAdd from "./components/DocumentAdd";
import DocumentFile from "./components/DocumentFile";

function Document() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen flex gap-6">
      {/* Document Add Section */}
      <section className="flex-1">
        <DocumentAdd />
      </section>

      {/* Document File Section */}
      <section>
        <DocumentFile />
      </section>
    </main>
  );
}

export default Document;
