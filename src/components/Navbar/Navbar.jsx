import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-white text-black">
            <div className="navbar-start">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="mx-3 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-amber-700 text-white rounded-xl z-19 w-52 p-2 cursor-pointer">
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Change Going</li>
                        <li>Blog</li>
                        <li>Download</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <a className="text-xl font-bold ps-0 md:ps-8">CS - Ticket System</a>
            </div>
            <div className="hidden lg:flex justify-end">
                <ul className="menu menu-horizontal gap-4 cursor-pointer">
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Change Going</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-end w-32 ml-20 md:ml-4">
                <a className="btn bg-[#422AD5]"><span><FaPlus></FaPlus></span>New Ticket</a>
            </div>
        </div>
    );
};

export default Navbar;