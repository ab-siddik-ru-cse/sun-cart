"use client";
import { AppContext } from '@/app/context/AppContext';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Active route check korar jonno
import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaSun, FaBars } from 'react-icons/fa';
import { ImExit } from "react-icons/im";
import { IoCreateOutline } from "react-icons/io5";

const AppNavar = () => {
    const { cart } = useContext(AppContext);
    const { data: session, isPending } = authClient.useSession();
    const pathname = usePathname(); // Current path track kore
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    // Active link style function
    const linkStyle = (path) =>
        `transition-all ${pathname === path ? 'text-orange-600 font-bold' : 'hover:text-orange-500'}`;

    const navLinks = (
        <>
            <li><Link href={'/'} onClick={() => setIsDrawerOpen(false)} className={linkStyle('/')}>Home</Link></li>
            <li><Link href={'/products'} onClick={() => setIsDrawerOpen(false)} className={linkStyle('/products')}>Products</Link></li>
            {user && <li><Link href={'/profile'} onClick={() => setIsDrawerOpen(false)} className={linkStyle('/profile')}>My Profile</Link></li>}
        </>
    );

    return (
        <div className="border-b border-gray-200 bg-white sticky top-0 z-50 py-4">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link href={'/'} className="font-extrabold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                    <div className='flex items-center justify-center gap-3'> <FaSun color='orange' /> <span> SunCart </span></div>
                </Link>

                {/* Desktop Nav (Hidden on Mobile) */}
                <ul className="hidden lg:flex gap-8 font-medium">
                    {navLinks}
                </ul>

                <div className="flex items-center gap-4">
                    {/* Cart Icon */}
                    <div className="relative cursor-pointer group">
                        <Link href={'/cart'}>
                            <FaShoppingCart size={24} color='orange' />
                            <span className="absolute -top-2 -right-2 text-[10px] bg-orange-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        </Link>
                    </div>

                    {/* Auth Section for Desktop (Hidden on Mobile/Tablet) */}
                    <div className="hidden lg:flex items-center gap-4">
                        {isPending ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : user ? (
                            <div className="flex items-center gap-3">
                                <Link href="/profile" className="avatar online placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                                        {user.image ? <img src={user.image} alt="user" /> : <span>{user.name?.charAt(0).toUpperCase()}</span>}
                                    </div>
                                </Link>
                                <button onClick={handleSignOut} className="btn btn-outline btn-sm border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"><ImExit /> Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link href="/login" className="btn btn-outline btn-sm border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"><ImExit /> Login</Link>
                                <Link href="/signup" className="btn btn-sm bg-orange-600 text-white hover:bg-white hover:text-orange-600 border-orange-600"><IoCreateOutline /> Sign Up</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Controls: Avatar & Hamburger (Shown only on small screens) */}
                    <div className="flex lg:hidden items-center gap-3">
                        {user && (
                            <Link href="/profile" className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-10">
                                    {user.image ? <img src={user.image} alt="user" /> : <span>{user.name?.charAt(0).toUpperCase()}</span>}
                                </div>
                            </Link>
                        )}

                        {/* Drawer Toggle Button */}
                        <label className="cursor-pointer text-2xl text-gray-700" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                            <FaBars />
                        </label>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar / Drawer Overlay */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    {/* Dark Overlay */}
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsDrawerOpen(false)}></div>

                    {/* Sidebar Content */}
                    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-6 transition-transform transform duration-300">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-orange-500">Menu</h2>
                            <button onClick={() => setIsDrawerOpen(false)} className="text-2xl">&times;</button>
                        </div>

                        <ul className="flex flex-col gap-6 text-lg font-medium">
                            {navLinks}
                            <hr />
                            {!user ? (
                                <>
                                    <li><Link href="/login" onClick={() => setIsDrawerOpen(false)} className={linkStyle('/login')}>Login</Link></li>
                                    <li><Link href="/signup" onClick={() => setIsDrawerOpen(false)} className={linkStyle('/signup')}>Sign Up</Link></li>
                                </>
                            ) : (
                                <li><button onClick={() => { handleSignOut(); setIsDrawerOpen(false); }} className="text-red-500 flex items-center gap-2"><ImExit /> Logout</button></li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppNavar;