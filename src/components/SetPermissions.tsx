import { useState } from "react";
import Select from "react-select";
import mrb from "../assets/img/mrb.jpg";

// ข้อมูลผู้ใช้
const usersData = [
    { id: 1, name: "Ms.B_bbb", avatar: mrb },
    { id: 2, name: "Mr.A_aaa", avatar: mrb },
    { id: 3, name: "Ms.C_ccc", avatar: mrb },
    { id: 4, name: "Mr.D_dddd", avatar: mrb },  
    { id: 5, name: "Ms.E_eeee", avatar: mrb },   
    { id: 6, name: "Mr.F_ffff", avatar: mrb },   
];


export default function SetPermissions() {
    const [selectedUsers, setSelectedUsers] = useState<any[]>([]);

      // เลือก 4 ตัวที่จะแสดงเป็น Recommended 
  const recommended = usersData.slice(0, 3);

    // ตัวเลือกที่ส่งให้ react-select
    const options = usersData.map((user) => ({
        value: user.id,
        label: (
            <div className="flex items-center space-x-2">
                <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                <span>{user.name}</span>
            </div>
        ),
        name: user.name,
        avatar: user.avatar,
    }));

    // อัพเดตผู้ใช้ที่ถูกเลือก
    const handleChange = (selectedOption: any) => {
        setSelectedUsers(selectedOption || []);
    };

    // เพิ่มผู้ใช้จาก "ยังไม่เลือก"
    const addUser = (user: any) => {
        setSelectedUsers((prev) => [
            ...prev,
            { value: user.id, label: user.name, avatar: user.avatar, name: user.name },
        ]);
    };

    return (
        <>
            <div className="mt-4">
                <p className="text-sm font-bold p-1">Set permissions :</p>
                {/* แสดงผู้ใช้ที่ถูกเลือกด้านบน */}
                <div className="flex flex-col space-y-2 my-2">
                    {selectedUsers.map((user, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-black text-white p-3 rounded-lg"
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <p className="text-sm font-medium">{user.name}</p>
                            </div>
                            <select className="text-sm p-1 rounded bg-gray-200 text-black">
                                <option value="Edit">Edit</option>
                                <option value="View Only">View Only</option>
                                <option value="Full Access">Full Access</option>
                                <option value="Remove">Remove</option>
                            </select>
                        </div>
                    ))}
                </div>

                {/* React Select */}
                <Select
                    options={options}
                    isMulti
                    placeholder="Search and Select Users"
                    onChange={handleChange}
                    value={selectedUsers}
                    className=""
                />
            </div>



            {/* ผู้ใช้ที่ยังไม่ได้เลือก */}
            <div className="flex flex-col space-y-2 mt-6">
                {recommended
                    .filter((user) => !selectedUsers.some((u) => u.value === user.id))
                    .map((user) => (
                        <div
                            key={user.id}
                            onClick={() => addUser(user)}
                            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200"
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <p className="text-sm font-medium">{user.name}</p>
                            </div>
                            <select
                                className="text-sm p-1 rounded bg-gray-200 text-gray-400"
                                disabled
                            >
                                <option value="Edit">Edit</option>
                            </select>
                        </div>
                    ))}
            </div>
        </>
    );
}
