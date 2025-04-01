// import React from 'react';
// import HospitalList from '../components/HospitalList';

// const Hospitals = () => {
//   return (
//     <div className="p-4 sm:p-6 mx-[-200px]">
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//         <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Manage Hospitals</h1>
//         <div className="text-sm text-green-600 bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-auto">
//           {/* Super Admin */}
//         </div>
//       </div>
//       <HospitalList />
//     </div>
//   );
// };

// export default Hospitals;


import React from 'react';
import HospitalList from '../components/HospitalList';

const Hospitals = () => {
  return (
    <div className="p-4 sm:p-6 min-h-screen overflow-hidden ml-[-230px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 ">Manage Hospitals</h1>
        <div className="text-sm text-green-600 bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-auto">
          {/* Super Admin */}
        </div>
      </div>
      <HospitalList />
    </div>
  );
};

export default Hospitals;

