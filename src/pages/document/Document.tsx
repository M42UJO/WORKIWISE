import ButtonSave from "../../components/ButtonSave";
import DocumentAdd from "./components/DocumentAdd";
import DocumentFile from "./components/DocumentFile";
import DocumentHeader from "./components/DocumentHeader";

function Document() {
  return (
    <>
      <main>
        <div className="flex justify-between text-lg font-bold px-6">
          <DocumentHeader />
        </div>
        <div className="p-6  flex gap-6">
          <div className="w-3/4 h-[48rem] bg-white">
            <DocumentAdd />
          </div>
          <div className="w-1/4 bg-white p-6 rounded-lg shadow-md h-[48rem] flex flex-col">
            <DocumentFile />
            <ButtonSave />
          </div>
        </div>
      </main>
    </>
  );
}

export default Document;
