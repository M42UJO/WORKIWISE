import { useEffect, useState } from "react";
import { GetdataAPI_Get } from "../../../MainCall";

interface Tag {
  tag_id: number;
  tag_name: string;
}

interface Workspace {
  space_id: number;
  space_name: string;
  userweb_id: number;
  img_path: string;
  tag_list: Tag[];
}

export default function HomeCard() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  async function fetchData() {
    try {
      const response = await GetdataAPI_Get("/api/Workspace/GetWorkspace");

      if (Array.isArray(response)) {
        setWorkspaces(response); 
      } else {
        console.warn("Data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching workspaces:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Recent</h2>
      <div className="flex flex-wrap gap-6">
        {workspaces.length > 0 ? (
          workspaces.map((workspace) => (
            <div key={workspace.space_id} className="bg-gray-200 p-6 rounded-md shadow-md w-96">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base">{workspace.space_name}</h3>
                <div className="rounded-full w-10 h-10 flex items-center justify-center">
                  <img
                    src={workspace.img_path || "https://via.placeholder.com/40"}
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
                  src={workspace.img_path || "https://via.placeholder.com/40"}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />

                <div className="flex flex-wrap gap-2">
                  {workspace.tag_list && workspace.tag_list.length > 0 ? (
                    workspace.tag_list.map((tag) => (
                      <span
                        key={tag.tag_id}
                        className="bg-white text-gray-800 text-xs px-4 py-2 rounded-full border border-gray-300"
                      >
                        {tag.tag_name}
                      </span>
                    ))
                  ) : (
                    <span className="bg-white text-gray-800 text-xs px-4 py-2 rounded-full border border-gray-300">
                      No Tags
                    </span>
                  )}
                </div>
              </div>

              <hr className="border-t-2 border-gray-100 my-4 rounded-full" />
              <p className="text-gray-600 text-xs">
                0 Total Folder
              </p>
            </div>
          ))
        ) : (
          <p>No workspaces found.</p>
        )}
      </div>
    </>
  );
}
