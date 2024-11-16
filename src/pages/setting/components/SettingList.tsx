import { Link } from "react-router-dom";
export default function SettingList() {
  return (
    <section className="p-6 pt-1">
      {/* Add Item Button */}
      <div className="mb-8">
        <Link
          to={"/AddSetting"}
          className="bg-black text-white py-2 px-4 rounded-md shadow-md"
        >
          + เพิ่มรายการ
        </Link>
      </div>

      {/* List Header */}
      <div className="grid grid-cols-4 gap-4 text-gray-600 font-semibold text-sm mb-0">
        <div>ชื่อหัวข้อ :</div>
        <div>วันที่อัปโหลด :</div>
        <div>วันที่อัปเดตล่าสุด :</div>
        <div>การจัดการ :</div>
      </div>

      {/* List of Items */}
      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div key={item} className="grid grid-cols-4 gap-4 items-center p-2 ">
            {/* API Setting Name with Eye Icon */}
            <div className="relative flex justify-between items-center bg-white p-2 py-4 rounded-md w-full border shadow-md">
              <span className="text-gray-700 font-medium">API Setting V1</span>
              <Link to={"/SeeSetting"} className="bg-black shadow-md text-white p-2 flex items-center rounded-r-md justify-center w-14 h-full absolute right-0 top-0">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
            </div>

            {/* Upload Date */}
            <div className="bg-white border p-2 py-4 rounded-md shadow-md text-gray-600 text-sm text-center">
              01/01/2024
            </div>

            {/* Last Update Date */}
            <div className="bg-white border p-2 py-4 rounded-md shadow-md text-gray-600 text-sm text-center">
              16/01/2024
            </div>

            {/* Edit and Delete Buttons */}
            <div className="flex space-x-2 justify-center">
              <Link to={"/EditList"} className="bg-[#AFAFAF] text-white text-center py-4 px-4 w-40 rounded-md shadow-md">
                แก้ไข
              </Link>
              <button className="bg-black text-white py-4 px-4 w-40 rounded-md shadow-md">
                ลบ
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
