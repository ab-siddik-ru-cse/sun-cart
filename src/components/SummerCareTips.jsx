
"use client";

import React from "react";

const SummerCareTips = () => {
    const tips = [
        {
            id: 1,
            title: "Stay Hydrated",
            description: "Drink at least 8-10 glasses of water daily to keep your skin glowing and body energized.",
            icon: "💧",
            color: "bg-blue-50 text-blue-600",
        },
        {
            id: 2,
            title: "Sunscreen is Must",
            description: "Apply SPF 50+ every 2 hours to protect your skin from harmful UV rays and tanning.",
            icon: "☀️",
            color: "bg-yellow-50 text-yellow-600",
        },
        {
            id: 3,
            title: "Wear Light Clothes",
            description: "Choose breathable cotton or linen fabrics to stay cool and avoid skin irritation.",
            icon: "👕",
            color: "bg-orange-50 text-orange-600",
        },
        {
            id: 4,
            title: "Eye Protection",
            description: "Always wear UV-protected sunglasses to safeguard your eyes from extreme sunlight.",
            icon: "🕶️",
            color: "bg-pink-50 text-pink-600",
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Expert Advice</span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
                        Summer <span className="text-yellow-500">Care Tips</span> ⛱️
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Make the most of your summer while staying healthy and protected with our quick essential tips.
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map((tip) => (
                        <div
                            key={tip.id}
                            className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 ${tip.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bonus Tip Banner */}
                <div className="mt-12 p-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-orange-100">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl">🍉</span>
                        <div>
                            <p className="font-bold text-lg">Pro Tip: Seasonal Fruits!</p>
                            <p className="text-sm opacity-90 font-medium">Eat water-rich fruits like Watermelon and Oranges to beat the heat naturally.</p>
                        </div>
                    </div>
                    <button className="btn btn-ghost bg-white/20 hover:bg-white/30 border-none text-white rounded-full px-8">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SummerCareTips;