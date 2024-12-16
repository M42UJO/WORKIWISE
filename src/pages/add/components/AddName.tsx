export default function AddName() {
    return (
        <>
            <h2 className="text-lg mb-4">In <span className="font-black">User’s Workspace</span></h2>
            <div>
                <label className="block mb-2 font-black font-bold">List name :</label>
                <input
                    type="text"
                    placeholder="Please enter document name"
                    className="w-1/4 p-3 border border-[#AFAFAF] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
            </div>
        </>
    )
}

