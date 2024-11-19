import DashboardCard from './components/DashboardCard';
import DashboardChart from './components/DashboardChart';
import DashboardFolder from './components/DashboardFolder';

function Dashboard() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <div className="flex space-x-4">
                <DashboardCard />
                <DashboardChart />
            </div>
            <DashboardFolder />
        </div>
    );
}

export default Dashboard;
