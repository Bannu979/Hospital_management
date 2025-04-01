// import React from 'react';
// import { Check, X } from 'lucide-react';
// import { useHospitals } from '../context/HospitalContext';

// const HospitalList = () => {
//   const { hospitals, acceptHospital, removeHospital } = useHospitals();

//   return (
//     <div className="bg-white rounded-lg shadow-sm ">
//       <div className="p-4 sm:p-6 border-b border-gray-200 bg-green-400">
//         <h2 className="text-lg sm:text-xl font-semibold text-white">Available Hospitals</h2>
//       </div>
//       <div className="divide-y divide-gray-200 ">
//         {hospitals.map((hospital) => (
//           <div key={hospital.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50">
//             <div>
//               <h3 className="font-medium text-gray-900">{hospital.name}</h3>
//               <p className="text-sm text-gray-500 mt-1">{hospital.location}</p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2">
//               <button
//                 onClick={() => acceptHospital(hospital.id)}
//                 className="w-full sm:w-auto px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-400 flex items-center justify-center gap-2 transition-colors"
//               >
//                 <Check size={18} />
//                 <span>Accept</span>
//               </button>
//               <button
//                 onClick={() => removeHospital(hospital.id)}
//                 className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 flex items-center justify-center gap-2 transition-colors"
//               >
//                 <X size={18} />
//                 <span>Remove</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HospitalList;


import React from 'react';
import { Check, X } from 'lucide-react';
import { useHospitals } from '../context/HospitalContext';

const HospitalList = () => {
  const { hospitals, acceptHospital, removeHospital } = useHospitals();

  return (
    <div className="bg-white rounded-lg shadow-sm h-full w-full max-w-4xl ml-6">
      <div className="p-4 sm:p-6 border-b border-gray-200 bg-green-400">
        <h2 className="text-lg sm:text-xl font-semibold text-white">Available Hospitals</h2>
      </div>
      <div className="divide-y divide-gray-200 max-h-[70vh] overflow-auto">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50">
            <div>
              <h3 className="font-medium text-gray-900">{hospital.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{hospital.location}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => acceptHospital(hospital.id)}
                className="w-full sm:w-auto px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-400 flex items-center justify-center gap-2 transition-colors"
              >
                <Check size={18} />
                <span>Accept</span>
              </button>
              <button
                onClick={() => removeHospital(hospital.id)}
                className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 flex items-center justify-center gap-2 transition-colors"
              >
                <X size={18} />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;



