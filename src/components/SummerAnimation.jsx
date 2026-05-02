"use client";

import React from "react";
import Lottie from "lottie-react";
// একটি সামার থিম অ্যানিমেশন লিংক (আপনি চাইলে নিজের ডাউনলোড করা JSON ও দিতে পারেন)
const animationUrl = "https://lottie.host/8807d9d5-7634-43c3-982c-473d5774a38d/T7R0WvK3jS.json";

const SummerAnimation = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <div className="badge badge-warning p-4 font-bold text-orange-700">
                            New Collection 2026
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                            Ready for your <br />
                            <span className="text-orange-500 italic">Dream Vacation?</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
                            Explore our latest summer essentials and get up to <span className="font-bold text-orange-600">40% OFF</span> on all beachwear and accessories.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="btn btn-lg bg-orange-500 hover:bg-orange-600 border-none text-white rounded-2xl px-10">
                                Shop Now
                            </button>
                            <button className="btn btn-lg btn-outline border-2 border-orange-500 text-orange-500 rounded-2xl hover:bg-orange-500 hover:border-orange-500">
                                Explore Deals
                            </button>
                        </div>
                    </div>

                    {/* Lottie Animation Wrapper */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative">
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-300 rounded-full blur-[100px] opacity-30"></div>

                            {/* Actual Lottie Component */}
                            <Lottie
                                animationData={null} // যদি লোকাল ফাইল ব্যবহার করেন
                                path={animationUrl} // অনলাইন লিংকের জন্য
                                loop={true}
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SummerAnimation;