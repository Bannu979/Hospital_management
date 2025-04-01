import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHospital } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();

    const {token,setToken,userData} = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State for profile dropdown

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            {/* <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='' /> */}
            <a href="/" className="text-3xl font-bold text-green-500 flex items-center space-x-2">
            <FaHospital size={24} />
                <span>MediCare</span>
            </a>
            {/* Desktop Navigation */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>Home</li>
                </NavLink>
                <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>ALL DOCTORS</li>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>ABOUT</li>
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>CONTACT</li>
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {/* Profile Section */}
                {token ? (
                    <div 
                        className='flex items-center gap-2 cursor-pointer relative'
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <img className='w-8 rounded-full' src={userData.image} alt='' />
                        <img className='w-2.5' src={assets.dropdown_icon} alt='' />

                        {/* Profile Dropdown */}
                        {showDropdown && (
                            <div className='absolute top-12 right-0 bg-white shadow-md rounded-lg p-4 text-base font-medium text-gray-600 z-20'>
                                <p
                                    onClick={() => {
                                        navigate('/my-profile');
                                        setShowDropdown(false);
                                    }}
                                    className='hover:text-black cursor-pointer py-2'
                                >
                                    My Profile
                                </p>
                                <p
                                    onClick={() => {
                                        navigate('/my-appointments');
                                        setShowDropdown(false);
                                    }}
                                    className='hover:text-black cursor-pointer py-2'
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={
                                    //     () => {
                                    //     setToken(false);
                                    //     setShowDropdown(false);
                                    // }
                                    logout
                                }
                                    className='hover:text-black cursor-pointer py-2 text-red-500'
                                >
                                    Logout
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='bg-green-400 text-white px-8 py-3 rounded-full font-light hidden md:block'
                    >
                        Create Account
                    </button>
                )}

                {/* Mobile Menu Button */}
                <img
                    onClick={() => setShowMenu(true)}
                    className='w-6 md:hidden cursor-pointer'
                    src={assets.menu_icon}
                    alt=''
                />

                {/* Mobile Menu */}
                <div className={`fixed top-0 right-0 bottom-0 w-full bg-white z-20 transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt='' />
                        <img className='w-7 cursor-pointer' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt='' />
                    </div>

                    <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'>
                            <p className='px-4 py-2 rounded'>Home</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                            <p className='px-4 py-2 rounded'>ALL DOCTORS</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'>
                            <p className='px-4 py-2 rounded'>ABOUT</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                            <p className='px-4 py-2 rounded'>CONTACT</p>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
