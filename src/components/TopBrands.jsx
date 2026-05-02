"use client";

import React from "react";

const TopBrands = () => {
    const brands = [
        { id: 1, name: "Ray-Ban", logo: "https://logo.clearbit.com/ray-ban.com" },
        { id: 2, name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
        { id: 3, name: "Nivea", logo: "https://logo.clearbit.com/nivea.com" },
        { id: 4, name: "Adidas", logo: "https://logo.clearbit.com/adidas.com" },
        { id: 5, name: "Gucci", logo: "https://logo.clearbit.com/gucci.com" },
        { id: 6, name: "Puma", logo: "https://logo.clearbit.com/puma.com" },
        { id: 7, name: "Zara", logo: "https://logo.clearbit.com/zara.com" },
        { id: 8, name: "L'Oréal", logo: "https://logo.clearbit.com/loreal.com" },
    ];

    // ইনফিটি লুক দেওয়ার জন্য লিস্টটি ডাবল করা হয়েছে
    const doubleBrands = [...brands, ...brands];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                    Shop by <span className="text-orange-500">Top Brands</span> 🏷️
                </h2>
                <p className="text-gray-500 mt-2">The best summer essentials from the world's leading names.</p>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee flex gap-8">
                    {doubleBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="w-40 h-24 md:w-56 md:h-32 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default TopBrands;