function AddBody() {
    return (
      <div className="w-full">
        <table className="w-full table-fixed border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-500 font-semibold">
              <th className="w-1/4 text-left">Task</th>
              <th className="w-1/4 text-left">Status</th>
              <th className="w-1/4 text-left">Start date</th>
              <th className="w-1/4 text-left">Due date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 rounded-lg shadow-sm">
              <td className="p-3 rounded-l-md">Task 1</td>
              <td className="p-3">
                <span className="block bg-green-500 text-white text-center rounded-md py-1">
                  Complete
                </span>
              </td>
              <td className="p-3">5 days ago</td>
              <td className="p-3 rounded-r-md">Tomorrow</td>
            </tr>
            <tr className="bg-gray-100 rounded-lg shadow-sm">
              <td className="p-3 rounded-l-md">Task 2</td>
              <td className="p-3">
                <span className="block bg-red-500 text-white text-center rounded-md py-1">
                  Not Complete
                </span>
              </td>
              <td className="p-3">5 days ago</td>
              <td className="p-3 rounded-r-md">Tomorrow</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AddBody;
  