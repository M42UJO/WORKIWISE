import React, { useEffect, useState } from "react";
import axios from "axios";

interface Tag {
  tag_name: string;
  tag_id: number;
}

interface Workspace {
  space_id: number;
  space_name: string;
  userweb_id: number;
  img_path: string;
  tag_list: Tag[];
}

export default function HomeCard() {
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
 
  const token = "kNJTA7tCduh5z5Ig2jGAa6kGuFvkqzvgQiOsm5n5zbByhXetbbATeed2PQinz3Vabxb3eFUvxOP-R1efBCFw5NLWD3J_85ry2mjMRyf7Nb3VY89LQDv-P3SGVsO_z12HD1imbQUmD2P1j_zaXknTtqcn8c-w_2gjPSYhLDGim9c8JW9TVXoirn_mQAQKEvDUE1TfThwM5QLt5kBdfu9r12Mi5tSWHO3ZR0MN31KdYDQcy-fyPNWLWAVC3bfAeMNx=";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bsv-th-authorities.com/test_intern/api/Workspace/GetWorkspace?space_id=27",
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        if (response.data.length > 0) {
          setWorkspace(response.data[0]); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Recent</h2>
      <div className="flex gap-x-14">
        {workspace ? (
          <div className="bg-gray-200 p-6 rounded-md shadow-md w-96">
            <div className="flex justify-between items-center ">
              <h3 className="font-bold text-base">{workspace.space_name}</h3>
              <div className="rounded-full w-10 h-10 flex items-center justify-center">
                <img
                  src={workspace.img_path}
                  alt="Workspace Icon"
                  className="rounded-full w-10 h-10 object-cover"
                />
              </div>
            </div>

            <p className="text-gray-600 font-semibold text-xs mb-4">
              Date: {new Date().toLocaleDateString()}
            </p>

            <div className="flex items-center mb-4">
              <img
                src={workspace.img_path}
                alt="User"
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <span className="bg-white text-gray-800 text-xs px-8 h-10 py-3 rounded-full border border-gray-300">
                {workspace.tag_list.map((tag) => tag.tag_name).join(", ")}
              </span>
            </div>

            <hr className="border-t-2 border-gray-100 my-4 rounded-full" />
            <p className="text-gray-600 text-xs">{workspace.tag_list.length} Total Tags</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
