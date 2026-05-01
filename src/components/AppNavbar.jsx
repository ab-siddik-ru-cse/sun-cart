"use client";
import { AppContext } from '@/app/context/AppContext';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ImExit } from "react-icons/im";
import { FaSun } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const AppNavar = () => {
    const { cart } = useContext(AppContext);
    const { data: session, isPending } = authClient.useSession();
    const [loading, setLoading] = useState(false);


    const user = session?.user;
    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const navLinks = (
        <>
            <li><Link href={'/'} className="hover:text-orange-500 transition-all">Home</Link></li>
            <li><Link href={'/products'} className="hover:text-orange-500 transition-all">Products</Link></li>
            <li><Link href={'/profile'} className="hover:text-orange-500 transition-all">My Profile</Link></li>
        </>
    );

    return (
        <div className="border-b border-gray-200 bg-white sticky top-0 z-50 py-4">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link href={'/'} className="font-extrabold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                    <div className='flex items-center justify-center gap-3'> <FaSun color='orange' /> <span> SunCart </span></div>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-8 font-medium">
                    {navLinks}
                </ul>

                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Cart Icon */}
                    <div className="relative cursor-pointer group">
                        <Link href={'/cart'}>
                            <FaShoppingCart size={24} color='orange' />
                            <span className="absolute -top-2 -right-2 text-[10px] bg-orange-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        </Link>
                    </div>

                    {/* Authentication Logic */}
                    {isPending ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : user ? (
                        /* User Logged In: Profile Avatar & Name */
                        <div className="flex items-center gap-3">
                            <Link href="/profile" className="avatar online placeholder cursor-pointer">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    {user.image ? (
                                        <img src={user.image} />
                                    ) : (
                                        <span className="text-xl">{user.name?.charAt(0).toUpperCase()}</span>
                                    )}
                                </div>
                            </Link>
                            <button
                                onClick={handleSignOut}
                                disabled={loading}
                                className="py-1 px-3 bg-white text-orange-600 hover:bg-orange-600 hover:text-white border border-orange-600 font-semibold text-lg rounded-sm  flex items-center justify-center gap-2"
                            >
                                {loading && (
                                    <span className="loading loading-spinner loading-sm"></span>
                                )}
                                {loading ? "Logging Out..." : <div className="flex items-center justify-center gap-3"> <ImExit /> <p> Log out</p></div>}
                            </button>
                        </div>
                    ) : (
                        /* User Logged Out: Login & Signup */
                        <div className="flex items-center gap-2">
                            <Link href="/login" className="py-1 px-3 bg-white text-orange-600 hover:bg-orange-600 hover:text-white border border-orange-600 font-normal text-lg rounded-sm  flex items-center justify-center gap-2">
                                <div className="flex items-center justify-center gap-1"> <ImExit /> <p> Log in</p></div>
                            </Link>
                            <Link href="/signup" className="py-1 px-3 bg-orange-600 text-white hover:bg-white hover:text-orange-600 border border-orange-600 font-normal text-lg rounded-sm  flex items-center justify-center gap-2">
                                <div className="flex items-center justify-center gap-1"> <IoCreateOutline /> <p>Sing up</p></div>
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="p-2">
                            <i className="fa-solid fa-bars text-xl"></i>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow-lg bg-white rounded-box w-52 space-y-2 font-medium border border-gray-100">
                            {navLinks}
                            {!user && (
                                <li className="border-t pt-2 mt-2">
                                    <Link href="/login">Login</Link>
                                    <Link href="/signup">Sign Up</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppNavar;