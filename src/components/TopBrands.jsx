"use client";

import React from "react";
import { TbBrandSafari } from "react-icons/tb";

const TopBrands = () => {
    const brands = [
        { id: 1, name: "Ray-Ban", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ray-Ban_logo.svg/1280px-Ray-Ban_logo.svg.png" },
        { id: 2, name: "Nike", logo: "https://thumbs.dreamstime.com/b/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-nike-logo-119869268.jpg" },
        { id: 3, name: "Nivea", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/NIVEA_logo_2021.svg/3840px-NIVEA_logo_2021.svg.png" },
        { id: 4, name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/960px-Adidas_Logo.svg.png" },
        { id: 5, name: "Gucci", logo: "https://download.logo.wine/logo/Gucci/Gucci-Logo.wine.png" },
        { id: 6, name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg" },
        { id: 7, name: "Zara", logo: "https://www.freepnglogos.com/uploads/zara-logo-png/zara-symbol-emblem-black-brand-zara-4.png" },
        { id: 8, name: "L'Oréal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1280px-L%27Or%C3%A9al_logo.svg.png" },
    ];

    const doubleBrands = [...brands, ...brands];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                    Shop by <span className="text-orange-500">Top Brands</span>
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