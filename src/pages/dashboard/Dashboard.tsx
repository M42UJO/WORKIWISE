
import DashboardCard from './components/DashboardCard';
import DashboardChart from './components/DashboardChart';
import DashboardFolder from './components/DashboardFolder';
import DashboardUser from './components/DashboardUser';

function Dashboard() {




    return (
        <div className="p-8 bg-gray-100 ">
            <DashboardUser />
            <p className="text-md font-bold text-gray-800 mb-6">Dashboard</p>
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
