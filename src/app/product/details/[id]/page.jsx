"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/context/AppContext";
import toast from "react-hot-toast";
import { FaCartArrowDown } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const ProductDetails = () => {
    const { products, cart, loading, setCart } = useContext(AppContext);
    console.log(cart);

    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const product = products.find(
        (p) => String(p.id) === String(id)
    );

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">No Product Found..!</h1>
            </div>
        );
    }

    const handleAddToCart = () => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);

            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });

        toast.success(`${product.name} added to cart!`, {
            icon: "🔥",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumb */}
                <div className="text-sm breadcrumbs mb-8 text-gray-500">
                    <ul className="flex gap-2">
                        <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                        <li><Link href="/products" className="hover:text-orange-500">Products</Link></li>
                        <li className="text-orange-500 font-semibold">{product.name}</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative group">
                        <div className="relative bg-white rounded-lg overflow-hidden border border-gray-200">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg">
                                <p className="text-orange-600 font-black text-xl">${product.price}</p>
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        <div>
                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                {product.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mt-4 text-gray-600 font-medium">
                                <div className="flex items-center text-yellow-500">
                                    <span className="text-lg">★</span>
                                    <span className="ml-1">{product.rating}</span>
                                </div>
                                <span className="text-gray-300">|</span>
                                <span>Brand: <span className="text-gray-900 font-bold">{product.brand}</span></span>
                                <span className="text-gray-300">|</span>
                                <span className={product.stock > 0 ? "text-green-500" : "text-red-500"}>
                                    {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-yellow-400 pl-4">
                            {product.description}
                        </p>

                        {/* Action Section */}
                        <div className="space-y-4 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                        className="px-4 py-2 hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="text-orange-600 flex items-center justify-center w-12 font-bold text-lg bg-gray-50">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                                        className="px-4 py-2 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                                {product.stock < 5 && product.stock > 0 && (
                                    <p className="text-sm text-orange-600 italic">Only a few left!</p>
                                )}
                            </div>

                            <div className="flex flex-row gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={product.stock <= 0}
                                    className={`flex-1 rounded-lg h-14 text-lg font-bold transition-colors ${product.stock > 0
                                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                                        : "bg-gray-300 cursor-not-allowed text-gray-500"
                                        }`}
                                >
                                    {product.stock > 0 ? <div className="flex items-center justify-center gap-3"> <FaCartArrowDown /> Add to Cart</div> : "Out of Stock"}
                                </button>
                                <button className="border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 rounded-lg h-14 w-14 flex items-center justify-center transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Extra Info */}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl"><TbTruckDelivery /></div>
                                <div>
                                    <p className="font-bold text-sm">Free Delivery</p>
                                    <p className="text-xs text-gray-500">Orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-2xl"><MdOutlineSecurity /></div>
                                <div>
                                    <p className="font-bold text-sm">Secure Payment</p>
                                    <p className="text-xs text-gray-500">100% Secure Transaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;