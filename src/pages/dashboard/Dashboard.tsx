import DashboardCard from './components/DashboardCard';
import DashboardChart from './components/DashboardChart';
import DashboardFolder from './components/DashboardFolder';


export default function Dashboard() {
    return (
        <div className="p-4 md:p-6 bg-gray-100  relative">
            <p className="text-md font-bold text-gray-800 mb-6">Dashboard</p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
                <div className="w-full lg:w-auto flex flex-row lg:flex-col gap-4 justify-center">
                    <DashboardCard />
                </div>
                <div className="w-full lg:w-auto flex flex-col md:flex-row gap-4 justify-center">
                    <DashboardChart />
                </div>
            </div>

            {/* Folder section */}
            <p className="text-md font-bold text-gray-800 mb-6 mt-6">Folder</p>
            <div className="flex justify-center w-full" >
                <div className="w-full max-w-[43rem]">
                    <DashboardFolder />
                </div>
            </div>
        </div>
    );
}