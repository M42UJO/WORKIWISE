import blank from "../../../assets/img/blank.jpg";

export default function DashboardUser() {
    return (
        <div className="absolute top-4 right-4" >
          <div className="flex justify-between items-center space-x-4 p-4">
            <h3 className="font-bold text-base">User's Workspace</h3>
            <div className="rounded-full w-10 h-10 flex items-center justify-center">
              {/* Replace with actual logo if available */}
              <img src={blank} alt="Icon" className="rounded-full" />
            </div>
          </div>
        </div>

    );
};
