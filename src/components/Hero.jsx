"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "SUMMER SALE",
            highlight: "50% OFF",
            description: "Dive into the season's best savings! Huge discounts on all beach essentials.",
            bgImage: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
            buttonText: "Shop Sale",
            buttonLink: "/products?category=sale",
            theme: "from-orange-600/60",
        },
        {
            id: 2,
            title: "HOT DEALS 🔥",
            highlight: "Limited Time",
            description: "Sizzling offers on sunglasses and outfits. Grab them before they are gone!",
            bgImage: "https://static.vecteezy.com/system/resources/thumbnails/006/026/259/small/tranquil-summer-vacation-holiday-landscape-tropical-island-sunset-beach-palms-shore-calm-sea-sand-exotic-nature-scenic-inspirational-and-peaceful-seascape-reflection-amazing-sky-sunset-photo.jpg",
            buttonText: "View Deals",
            buttonLink: "/products?deals=hot",
            theme: "from-amber-600/60",
        },
        {
            id: 3,
            title: "NEW ARRIVALS",
            highlight: "FRESH LOOK",
            description: "Discover our latest collection of premium summer wear and accessories.",
            bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
            buttonText: "Explore Now",
            buttonLink: "/products",
            theme: "from-blue-600/60",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 10000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative h-[70vh] w-full overflow-hidden bg-black">
            {/* Slides Container */}
            <div
                className="flex h-full w-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="relative h-full w-full flex-shrink-0">
                        {/* Background Image with Ken Burns Effect (Slow Zoom) */}
                        <div
                            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${slides[currentSlide].id === slide.id ? "scale-110" : "scale-100"
                                }`}
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                            {/* Overlays */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.theme} to-transparent`}></div>
                            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-20 flex h-full items-center justify-center px-8 md:px-20 lg:px-32">
                            <div className={`max-w-3xl space-y-6 transition-all duration-1000 delay-300 ${slides[currentSlide].id === slide.id ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}>
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-md">
                                    <span className="h-2 w-2 animate-ping rounded-full bg-yellow-400"></span>
                                    <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Exclusive Summer Collection</span>
                                </div>

                                <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl leading-none">
                                    {slide.title} <br />
                                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                                        {slide.highlight}
                                    </span>
                                </h1>

                                <p className="text-lg font-medium text-gray-100 md:text-xl max-w-xl leading-relaxed">
                                    {slide.description}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link
                                        href={slide.buttonLink}
                                        className="group relative overflow-hidden rounded-full bg-orange-500 px-6 py-3 font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-orange-600 active:scale-95"
                                    >
                                        <span className="relative z-10">{slide.buttonText}</span>
                                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500 group-hover:translate-x-full"></div>
                                    </Link>

                                    <button className="rounded-full border-2 border-white/30 px-6 py-3 font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modern Slide Indicators (Dots) */}
            <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? "w-12 bg-orange-500" : "w-4 bg-white/40 hover:bg-white/60"
                            }`}
                    ></button>
                ))}
            </div>

            {/* Side Navigation controls for Manual Swipe */}
            <div className="absolute inset-y-0 right-10 z-30 hidden flex-col justify-center gap-6 md:flex">
                <button
                    onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-orange-500 hover:border-orange-500"
                >
                    <span className="text-2xl transition-transform group-hover:-translate-y-1">↑</span>
                </button>
                <button
                    onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-orange-500 hover:border-orange-500"
                >
                    <span className="text-2xl transition-transform group-hover:translate-y-1">↓</span>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;