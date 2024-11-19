import React from 'react';

function DashboardFolder() {
    return (
        <div className="mt-8">
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-sm"
            />
            <div className="space-y-2">
                <div className="flex items-center text-gray-700 text-sm font-medium cursor-pointer hover:text-gray-900">
                    <span className="mr-2">📁</span> Folder A
                </div>
                <div className="flex items-center text-gray-700 text-sm font-medium cursor-pointer hover:text-gray-900">
                    <span className="mr-2">📁</span> Folder B
                </div>
            </div>
        </div>
    );
}

export default DashboardFolder;
