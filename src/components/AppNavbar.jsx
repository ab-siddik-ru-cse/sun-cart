"use client";
import { AppContext } from '@/app/context/AppContext';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AppNavar = () => {
    const { cart } = useContext(AppContext);
    const { data: session, isPending } = authClient.useSession();

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
                    SunCart
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
                            <span className="hidden md:block font-medium text-gray-700">{user.name}</span>
                            <Link href="/profile" className="avatar online placeholder cursor-pointer">
                                <div className="bg-neutral text-neutral-content rounded-full w-10 border-2 border-orange-400">
                                    {user.image ? (
                                        <img src={user.image} />
                                    ) : (
                                        <span className="text-xl">{user.name?.charAt(0).toUpperCase()}</span>
                                    )}
                                </div>
                            </Link>
                            <button onClick={handleSignOut} className='btn btn-danger'>Log Out</button>
                        </div>
                    ) : (
                        /* User Logged Out: Login & Signup */
                        <div className="flex items-center gap-2">
                            <Link href="/login" className="btn btn-ghost btn-sm">Login</Link>
                            <Link href="/signup" className="btn btn-warning btn-sm text-white hidden sm:flex">Sign Up</Link>
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