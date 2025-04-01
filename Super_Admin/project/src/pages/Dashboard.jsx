import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import { useHospitals } from '../context/HospitalContext';

const Dashboard = () => {
  const { acceptedCount, removedCount } = useHospitals();

  return (
    <div className="p-4 sm:p-6 ml-[-230px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
        {/* <div className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-auto">
          Super Admin
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <StatsCard
          title="Accepted Hospitals"
          value={acceptedCount}
          icon={<CheckCircle className="text-emerald-600" size={24} />}
        />
        <StatsCard
          title="Removed Hospitals"
          value={removedCount}
          icon={<XCircle className="text-red-600" size={24} />}
        />
      </div>
    </div>
  );
};

export default Dashboard;