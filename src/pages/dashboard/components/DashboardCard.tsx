import React from 'react';

function DashboardCard() {
    return (
        <div className="space-y-4">
            <div className="w-36 h-36 flex flex-col items-center justify-center bg-black text-white rounded-lg shadow-md">
                <h2 className="text-xs font-semibold">Number of Task</h2>
                <span className="text-4xl font-bold">1</span>
                <p className="text-xs mt-1">Task</p>
            </div>
            <div className="w-36 h-36 flex flex-col items-center justify-center bg-white text-black rounded-lg shadow-md border border-gray-300">
                <h2 className="text-xs font-semibold">All Document</h2>
                <span className="text-4xl font-bold">1</span>
                <p className="text-xs mt-1 text-gray-500">document</p>
            </div>
        </div>
    );
}

export default DashboardCard;
