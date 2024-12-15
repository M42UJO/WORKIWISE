import AddBody from "./components/AddBody";
import AddHead from "./components/AddHead";

function Addlist() {
  return (
    <div className="h-screen flex flex-col p-6">
      
      {/* ส่วนหัว */}
      <div className="mb-4">
        <AddHead />
      </div>

      {/* ตาราง */}
      <div className="flex justify-center items-center flex-grow">
        <AddBody />
      </div>
    </div>
  );
}

export default Addlist;
