import AddBody from "./components/AddBody";
import AddHead from "./components/AddHead";
import AddName from "./components/AddName";

function Addlist() {
  return (
    <>
      {/* ส่วนหัว */}
      <div className="flex justify-between text-lg font-bold px-6">
        <AddHead />
      </div>

      <div className="p-6">

        {/* ส่วนชื่อ*/}
        <div>
          <AddName />
        </div>

        {/* ตาราง */}
        <div className="flex justify-center items-center flex-grow mt-4">
          <AddBody />
        </div>
      </div>
    </>
  );
}

export default Addlist;
