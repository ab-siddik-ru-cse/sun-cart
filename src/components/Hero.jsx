"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
    // Array defining the slides in the hero section
    const slides = [
        {
            id: "slide1",
            title: "SUMMER SALE",
            highlight: "50% OFF",
            description: "Dive into the season's best savings! Huge discounts on all beach essentials.",
            bgImage: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D", // Beach scene
            buttonText: "Shop Sale",
            buttonLink: "/products?category=sale",
        },
        {
            id: "slide2",
            title: "HOT DEALS 🔥",
            highlight: "Limited Time",
            description: "Sizzling offers on sunglasses and outfits. Grab them before they are gone!",
            bgImage: "https://static.vecteezy.com/system/resources/thumbnails/006/026/259/small/tranquil-summer-vacation-holiday-landscape-tropical-island-sunset-beach-palms-shore-calm-sea-sand-exotic-nature-scenic-inspirational-and-peaceful-seascape-reflection-amazing-sky-sunset-photo.jpg", // Sunset beach
            buttonText: "View Deals",
            buttonLink: "/products?deals=hot",
        },
    ];

    return (
        <section className="bg-amber-50 relative overflow-hidden">
            {/* Dynamic Wave Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f97316" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,138.7C672,149,768,203,864,202.7C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="carousel w-full h-[70vh] min-h-[400px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        id={slide.id}
                        className="carousel-item relative w-full flex items-center justify-center"
                    >
                        {/* Background Image with Amber Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-950/80 to-yellow-950/50"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-fadeInUp">
                            <span className="inline-block px-4 py-1 rounded-full bg-yellow-400 text-orange-950 font-bold text-sm mb-4 tracking-wider">
                                SUN-KISSED SAVINGS
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-2">
                                <span className="block">{slide.title}</span>
                                <span className="block text-yellow-300 drop-shadow-md animate__animated animate__pulse animate__infinite animate__slower my-element">{slide.highlight}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                                {slide.description}
                            </p>
                            <Link href={slide.buttonLink} className="btn bg-orange-500 hover:bg-orange-600 text-white btn-lg px-12 border-none rounded-full shadow-lg shadow-orange-950/30 font-bold">
                                {slide.buttonText}
                            </Link>
                        </div>

                        {/* Carousel Navigation Buttons */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                            <a href={`#${slides[index === 0 ? slides.length - 1 : index - 1].id}`} className="btn btn-circle bg-white/20 text-white hover:bg-white/40 border-none">
                                ❮
                            </a>
                            <a href={`#${slides[index === slides.length - 1 ? 0 : index + 1].id}`} className="btn btn-circle bg-white/20 text-white hover:bg-white/40 border-none">
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;