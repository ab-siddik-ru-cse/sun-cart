"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; // আপনার BetterAuth ক্লায়েন্ট পাথ
import { useRouter } from "next/navigation";

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
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                    {/* Cover/Header Section */}
                    <div className="h-48 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 relative">
                        <div className="absolute -bottom-16 left-8 md:left-12">
                            <div className="avatar">
                                <div className="w-32 md:w-40 rounded-2xl ring ring-white ring-offset-base-100 ring-offset-4 shadow-xl">
                                    <img src={user.image || "https://i.pravatar.cc/300"} alt={user.name} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons (Top Right) */}
                    <div className="flex justify-end p-6 pt-20 md:pt-6 gap-3">
                        <Link
                            href="/profile/update"
                            className="btn btn-warning btn-sm md:btn-md rounded-xl font-bold border-none shadow-md"
                        >
                            Update Profile
                        </Link>
                    </div>

                    {/* User Info Section */}
                    <div className="px-8 md:px-12 pb-12 pt-4">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight">
                                {user.name}
                            </h1>
                            <p className="text-orange-500 font-semibold">{user.email}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Info Tiles */}
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Account Status</p>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <p className="font-bold text-gray-700">Active Verified User</p>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Shopping Preference</p>
                                <p className="font-bold text-gray-700 italic">"Always Summer Mode 🔥"</p>
                            </div>
                        </div>

                        {/* Quick Stats for Aesthetic */}
                        <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-8">
                            <div className="text-center">
                                <p className="text-2xl font-black text-gray-800">12</p>
                                <p className="text-xs text-gray-400 uppercase font-bold">Orders</p>
                            </div>
                            <div className="text-center border-x border-gray-100">
                                <p className="text-2xl font-black text-gray-800">4</p>
                                <p className="text-xs text-gray-400 uppercase font-bold">Wishlist</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-black text-gray-800">0</p>
                                <p className="text-xs text-gray-400 uppercase font-bold">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-8">
                    <Link href="/" className="text-gray-400 hover:text-orange-500 font-medium transition-colors">
                        ← Return to SunCart Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;