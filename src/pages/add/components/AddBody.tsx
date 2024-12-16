export default function AddBody() {
  return (
    <>
      <div className="w-full">
        <table className="w-full table-fixed ">
          <thead>
            <tr className="text-gray-500 font-semibold">
              <th className="w-1/4 p-2  text-center">Task</th>
              <th className="w-1/4 p-2 text-center">Status</th>
              <th className="w-1/4 p-2 text-center">Start date</th>
              <th className="w-1/4 p-2 text-center">Due date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200 rounded shadow-sm text-center">
              <td className="p-3 ">Task 1</td>
              <td className="block bg-green-400 text-white text-center py-3">
                Complete
              </td>
              <td className="p-3">5 days ago</td>
              <td className="p-3">Tomorrow</td>
            </tr>
            <tr className="bg-gray-200 rounded shadow-sm text-center">
              <td className="p-3">Task 2</td>
              <td className="block bg-red-400 text-white text-center  py-3">
                  Not Complete
              </td>
              <td className="p-3">5 days ago</td>
              <td className="p-3">Tomorrow</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}


