import React from 'react';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm sm:text-base text-gray-600">{title}</p>
          <h3 className="text-xl sm:text-2xl font-semibold text-emerald-700">{value}</h3>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;