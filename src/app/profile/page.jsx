"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; // আপনার BetterAuth ক্লায়েন্ট পাথ
import { useRouter } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

const ProfilePage = () => {
    // BetterAuth সেশন থেকে ইউজার ডাটা নিন
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-infinity loading-lg text-orange-500"></span>
            </div>
        );
    }

    if (!session) {
        router.replace("/login");
        return null;
    }

    const { user } = session;

    return (
        <div className="min-h-screen py-12 px-4 mt-10">
            <div className="max-w-4xl mx-auto">
                {/* Profile Card */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    {/* Cover/Header Section */}
                    <div className="h-48 relative" style={{ backgroundImage: `${user.image}` ? `url(${user.image})` : 'none' }}>
                        <div className="absolute -bottom-16 left-8 md:left-12">
                            <div className="avatar">
                                <div className="w-32 md:w-40 rounded-sm ">
                                    <img src={user.image || "https://img.magnific.com/premium-vector/free-vector-user-icon-simple-line_901408-588.jpg"} alt={user.name} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons (Top Right) */}
                    <div className="flex justify-end p-6 pt-20 md:pt-6 gap-3">
                        <Link
                            href="/profile/update"
                            className="btn btn-transparent text-orange-600 btn-sm md:btn-md rounded-sm font-bold border border-orange-600"
                        >
                            <FaUserEdit />
                            Update Profile
                        </Link>
                    </div>

                    {/* User Info Section */}
                    <div className="px-8 md:px-12 pb-12 pt-4">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-black text-orange-600 tracking-tight">
                                {user.name}
                            </h1>
                            <p className="text-gray-500 font-semibold mt-2">{user.email}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Info Tiles */}
                            <div className="p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-orange-500 transition-colors">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Account Status</p>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-sm bg-green-500 animate-pulse"></span>
                                    <p className="font-normal text-gray-500">Active Verified User</p>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-orange-500 transition-colors">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Shopping Preference</p>
                                <p className="font-normal text-gray-500 ">"Always Summer Mode"</p>
                            </div>
                        </div>

                        {/* Quick Stats for Aesthetic */}
                        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                            <div className="text-center">
                                <p className="text-2xl font-black text-orange-600">12</p>
                                <p className="text-xs text-gray-400 uppercase font-bold">Orders</p>
                            </div>
                            <div className="text-center border-x border-gray-100">
                                <p className="text-2xl font-black text-orange-600">4</p>
                                <p className="text-xs text-gray-400 uppercase font-bold">Wishlist</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-black text-orange-600">0</p>
                                <p className="text-xs text-gray-400 uppercase font-bold">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="text-center text-gray-400 hover:text-orange-500 mt-8 flex items-center justify-center gap-2">
                    <IoArrowBackSharp />
                    <Link href="/" className="text-gray-400 hover:text-orange-500 font-medium transition-colors">
                        Return to SunCart Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;