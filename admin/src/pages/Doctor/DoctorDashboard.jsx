import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  // const { dToken, dashData, setDashData, getDashData } =useContext(DoctorContext);
  const { 
    dToken, 
    dashData, 
    setDashData, 
    getDashData, 
    cancelAppointment,  // ✅ Add these functions from DoctorContext
    completeAppointment 
  } = useContext(DoctorContext);
  
  // const {currency} = useContext(AppContext)
  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="m-5">
        {/* Flex container for cards */}
        <div className="flex flex-wrap gap-5">
          {/* Doctors */}
          <div className="flex items-center gap-4 bg-white p-5 min-w-60 rounded-lg border border-gray-200 shadow-md cursor-pointer hover:scale-105 transition-all">
            <img
              src={assets.earning_icon}
              alt="Doctors"
              className=" w-12 h-12 "
            />
            <div>
              <p className="text-xl font-semibold">
                {"$"} {dashData.earnings ?? "N/A"}
              </p>
              <p className="text-gray-500 text-sm">Earnings</p>
            </div>
          </div>

          {/* Appointments */}
          <div className="flex items-center gap-4 bg-white p-5 min-w-60 rounded-lg border border-gray-200 shadow-md cursor-pointer hover:scale-105 transition-all">
            <img
              src={assets.appointment_icon}
              alt="Appointments"
              className="w-12 h-12"
            />
            <div>
              <p className="text-xl font-semibold">
                {dashData.appointments ?? "N/A"}
              </p>
              <p className="text-gray-500 text-sm">Appointments</p>
            </div>
          </div>

          {/* Patients */}
          <div className="flex items-center gap-4 bg-white p-5 min-w-60 rounded-lg border border-gray-200 shadow-md cursor-pointer hover:scale-105 transition-all">
            <img
              src={assets.patients_icon}
              alt="Patients"
              className="w-12 h-12"
            />
            <div>
              <p className="text-xl font-semibold">
                {dashData.patients ?? "N/A"}
              </p>
              <p className="text-gray-500 text-sm">Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-gray-300">
            <img className="font-semibold" src={assets.list_icon} alt="" />
            <p>Latest Bookings</p>
          </div>

          <div className="pt-4 border border-t-0 border-gray-300">
            {dashData.latestAppointments.map((item, index) => (
              <div
                className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
                key={index}
              >
                <img
                  className="rounded-full w-10"
                  src={item.userData.image}
                  alt=""
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {item.userData.name}
                  </p>
                  {/* <p className="text-gray-600">{slotDateFormat(item.slotDate)}</p> */}
                  <p className="text-gray-600">{item.slotDate}</p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-400 text-xs font-medium">cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-500 text-xs font-medium">
                    Completed
                  </p>
                ) : (
                  <div className="flex">
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-10 cursor-pointer"
                      src={assets.cancel_icon}
                      alt=""
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className="w-10 cursor-pointer"
                      src={assets.tick_icon}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
