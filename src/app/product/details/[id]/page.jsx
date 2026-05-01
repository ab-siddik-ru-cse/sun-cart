"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/context/AppContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const { products } = useContext(AppContext);
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);

    const product = products.find((p) => parseInt(p.id) === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1>No Products Found..!</h1>
            </div>
        );
    }

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        toast.success(`${product.name} added to cart!`, {
            icon: '🔥',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumb */}
                <div className="text-sm breadcrumbs mb-8 text-gray-500">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
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
                                <div className="join border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                        className="join-item btn btn-ghost px-4"
                                    >
                                        -
                                    </button>
                                    <span className="join-item text-orange-600 flex items-center justify-center w-12 font-bold text-lg bg-gray-100">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                                        className="join-item btn btn-ghost px-4"
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-sm text-orange-600 italic">Only a few left!</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="btn bg-orange-500 hover:bg-orange-600 text-white border-none flex-1 rounded-lg h-14 text-lg font-bold"
                                >
                                    Add to Cart
                                </button>
                                <button className="btn btn-outline border-2 border-gray-200 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 rounded-lg h-14 w-14 flex items-center justify-center p-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Extra Info */}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white-50 rounded border border-gray-200">🚚</div>
                                <div>
                                    <p className="font-bold text-sm">Free Delivery</p>
                                    <p className="text-xs text-gray-500">Orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white-50 rounded border border-gray-200">🛡️</div>
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