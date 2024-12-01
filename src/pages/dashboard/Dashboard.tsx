
import DashboardCard from './components/DashboardCard';
import DashboardChart from './components/DashboardChart';
import DashboardFolder from './components/DashboardFolder';
import DashboardUser from './components/DashboardUser';

function Dashboard() {



    
    return (
        <div className="p-8 bg-gray-100 ">
            <DashboardUser />
            <p className="text-md font-bold text-gray-800 mb-6">Dashboard</p>
            {/* <div className="mb-4 flex items-center space-x-4">
                <p className="text-sm text-gray-700">
                    <strong>Cookie Value:</strong> {cookieValue}
                </p>
                {cookieValue === "true" && (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
                    >
                        Logout
                    </button>
                )}
            </div> */}
            <div className="flex space-x-4 justify-center">
                <DashboardCard />
                <DashboardChart />
            </div>
            <p className="text-md font-bold text-gray-800 mb-6 mt-6">Folder</p>
            <div className="flex justify-center">
                <DashboardFolder />
            </div>
        </div>
    );
}

export default Dashboard;
