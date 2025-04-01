import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";
import { FaHospital } from "react-icons/fa";

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext);
    const { dToken, setDToken } = useContext(DoctorContext);
    const navigate = useNavigate();

    const logout = () => {
        if (aToken) {
            setAToken('');
            localStorage.removeItem("aToken");
        }
        if (dToken) {
            setDToken('');
            localStorage.removeItem("dToken");
        }
        navigate("/"); // Ensure navigation happens AFTER state update
    };

    return (
        <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b border-b-gray-300 bg-white">
            <div className="flex items-center gap-2 text-xs">
                <a href="/" className="text-3xl font-bold text-green-500 flex items-center space-x-2">
                    <FaHospital size={24} />
                    <span>MediCare</span>
                </a>
                <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
                    {aToken ? "Admin" : dToken ? "Doctor" : ""}
                </p>
            </div>
            <button onClick={logout} className="bg-green-400 text-white text-sm px-10 py-2 rounded-full">
                Logout
            </button>
        </div>
    );
};

export default Navbar;


