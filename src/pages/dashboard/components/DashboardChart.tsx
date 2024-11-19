import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

function DashboardChart() {
    const completedData = {
        labels: ['Completed', 'Not Completed'],
        datasets: [
            {
                data: [1, 1], // Adjust the data as needed
                backgroundColor: ['#000000', '#D1D5DB'], // Black and light gray
                borderWidth: 0,
            },
        ],
    };

    const dutiesData = {
        labels: ['Mr. A', 'Mr. B'],
        datasets: [
            {
                data: [5, 5], // Adjust the data as needed
                backgroundColor: ['#000000', '#D1D5DB'], // Black and light gray
                borderWidth: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="flex space-x-8"> {/* Increase space between charts */}
            <div className="w-64 p-6 bg-white rounded-lg shadow-md text-center border border-gray-300">
                <h2 className="text-xs font-semibold text-gray-800">Completed and Unfinished work</h2>
                <div className="w-24 h-24 mx-auto mt-4">
                    <Pie data={completedData} options={options} />
                </div>
                <div className="flex justify-around mt-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        <span>Completed</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                        <span>Not Completed</span>
                    </div>
                </div>
            </div>

            <div className="w-64 p-6 bg-white rounded-lg shadow-md text-center border border-gray-300">
                <h2 className="text-xs font-semibold text-gray-800">Manage work duties</h2>
                <div className="w-24 h-24 mx-auto mt-4">
                    <Pie data={dutiesData} options={options} />
                </div>
                <div className="flex justify-around mt-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        <span>Mr. A</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                        <span>Mr. B</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardChart;
