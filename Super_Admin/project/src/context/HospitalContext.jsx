import React, { createContext, useContext, useState } from 'react';

const HospitalContext = createContext(undefined);

export const HospitalProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([
    {
      id: '1',
      name: 'Apollo General Hospital',
      location: 'New York, NY',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Apollo Healthcare Center',
      location: 'Los Angeles, CA',
      status: 'pending',
    },
    {
      id: '3',
      name: 'Apollo Medical Center',
      location: 'Chicago, IL',
      status: 'pending',
    },
  ]);

  const acceptedCount = hospitals.filter((h) => h.status === 'accepted').length;
  const removedCount = hospitals.filter((h) => h.status === 'removed').length;

  const acceptHospital = (id) => {
    setHospitals(
      hospitals.map((hospital) =>
        hospital.id === id ? { ...hospital, status: 'accepted' } : hospital
      )
    );
  };

  const removeHospital = (id) => {
    setHospitals(
      hospitals.map((hospital) =>
        hospital.id === id ? { ...hospital, status: 'removed' } : hospital
      )
    );
  };

  return (
    <HospitalContext.Provider
      value={{
        hospitals,
        acceptedCount,
        removedCount,
        acceptHospital,
        removeHospital,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitals = () => {
  const context = useContext(HospitalContext);
  if (context === undefined) {
    throw new Error('useHospitals must be used within a HospitalProvider');
  }
  return context;
};