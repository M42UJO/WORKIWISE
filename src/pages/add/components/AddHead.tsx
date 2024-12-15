function AddHead() {
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">In <span className="font-black">User’s Workspace</span></h2>
        <div>
          <label className="block mb-2 text-gray-600 font-medium">List name :</label>
          <input
            type="text"
            placeholder="Please enter document name"
            className="border rounded-md p-2 w-full max-w-sm"
          />
        </div>
      </div>
    );
  }
  
  export default AddHead;
  