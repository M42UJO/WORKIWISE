import { useState } from "react";

import mrb from "../assets/img/mrb.jpg";



const usersData = [
    { id: 1, name: "Ms.B_bbb", avatar: mrb }, // ใช้ string URL
    { id: 2, name: "Mr.A_aaa", avatar: mrb },
    { id: 3, name: "Ms.C_ccc", avatar: mrb },
];

export default function SetPermissions() {
    const [searchTerm, setSearchTerm] = useState(""); // state สำหรับเก็บค่าคำค้นหา
    const [users] = useState(usersData); // ผู้ใช้ทั้งหมด (ข้อมูลคงที่)

    // กรองรายชื่อผู้ใช้ตาม searchTerm
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <>
            {/* Search Input */}
            <div className="mt-4">
                <p className="text-sm font-bold p-1">Set permissions :</p>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-[#AFAFAF] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
            </div>

            {/* User List */}
            <div className="flex flex-col space-y-4 mt-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-[#AFAFAF]"
                        >
                            {/* User Info */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.avatar} // ใช้ URL โดยตรง
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <p className="text-sm font-medium">{user.name}</p>
                            </div>
                            {/* Edit Dropdown */}
                            <select className="border border-[#AFAFAF] rounded text-sm p-2">
                                <option>Edit</option>
                                <option>View Only</option>
                                <option>Full Access</option>
                                <option>Remove</option>
                            </select>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No users found</p>
                )}
            </div>
        </>
    )
}

