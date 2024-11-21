
import profile from "../../../assets/img/profile.jpg";
import blank from "../../../assets/img/blank.jpg";

export default function HomeCard() {
  return (
    <div className="p-8">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Recent</h2>
      <div className="flex gap-x-14">

        {/* Recent Card */}
        <div className="bg-gray-200 p-6 rounded-md shadow-md w-96">
          {/* Card Header */}
          <div className="flex justify-between items-center ">
            <h3 className="font-bold text-base">User's Workspace</h3>
            <div className="rounded-full w-10 h-10 flex items-center justify-center">
              {/* Replace with actual logo if available */}
              <img src={blank} alt="Icon" className="rounded-full" />
            </div>
          </div>

          {/* Date */}
          <p className="text-gray-600 font-semibold  text-xs mb-4">Date: Nov 10, 2022</p>

          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src={profile}
              alt="User"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="bg-white text-gray-800 text-xs px-8 h-10 py-3  rounded-full border border-gray-300">
              API
            </span>
          </div>

          {/* Divider */}
          <hr className="border-t-2 border-gray-100 my-4 rounded-full" />

          {/* Task Count */}
          <p className="text-gray-600 text-xs">1 Total Task</p>
        </div>
      </div>
    </div>
  );
};