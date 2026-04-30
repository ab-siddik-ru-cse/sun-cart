import React from 'react';

const AppNavar = () => {

    const navLinks = (
        <>
            <li><a className="hover:text-orange-500 transition-all">Home</a></li>
            <li><a className="hover:text-orange-500 transition-all">Products</a></li>
            <li><a className="hover:text-orange-500 transition-all">My Profile</a></li>
        </>
    );

    return (
        <div className="border-b border-gray-200 bg-white sticky top-0 z-50 py-6">

            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">

                <div className="font-extrabold text-xl sm:text-2xl md:text-3xl 
                bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                    SunCart
                </div>

                <ul className="hidden lg:flex gap-8 font-medium">
                    {navLinks}
                </ul>

                <div className="flex items-center gap-3 sm:gap-5">

                    <div className="relative">
                        <i className="fa-solid fa-cart-shopping text-lg sm:text-xl text-purple-500 cursor-pointer"></i>
                        <span className="absolute -top-3.5 -right-2 text-xs bg-red-400 text-white px-1.5 py-0.5 rounded-full">
                            5
                        </span>
                    </div>

                    <a className="hidden sm:block hover:text-purple-500 cursor-pointer">
                        Login
                    </a>
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="cursor-pointer">
                            <i className="fa-solid fa-bars text-xl"></i>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-white rounded-box w-52 space-y-2 font-medium">
                            {navLinks}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppNavar;