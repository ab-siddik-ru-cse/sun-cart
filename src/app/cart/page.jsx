"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "@/app/context/AppContext";
import toast from "react-hot-toast";

const CartPage = () => {
    const { cart, setCart } = useContext(AppContext);

    const updateQuantity = (id, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const removeItem = (id, name) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        toast.error(`${name} removed from cart`);
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = cart.length > 0 ? (subtotal > 50 ? 0 : 10) : 0;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        if (cart.length === 0) return toast.error("Your cart is empty!");

        setCart([]);
        localStorage.removeItem("cart");
        toast.success("Order placed successfully! Cart cleared.", {
            icon: "🎉",
            duration: 4000
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-black text-gray-900 mb-8">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-6xl mb-4">🛒</div>
                        <h2 className="text-xl font-bold text-gray-600">Your cart is empty!</h2>
                        <p className="text-gray-400 mb-6">Looks like you haven't added anything yet.</p>
                        <Link href="/products" className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-8 rounded-lg">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 group">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                                        <p className="text-orange-500 font-bold">${item.price}</p>

                                        <div className="flex items-center gap-4 mt-2">
                                            <div className="flex border border-gray-200 rounded-md overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="px-3 py-1 bg-gray-50 hover:bg-gray-100"
                                                > - </button>
                                                <span className="px-4 py-1 text-sm font-bold bg-white border-x border-gray-200">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="px-3 py-1 bg-gray-50 hover:bg-gray-100"
                                                > + </button>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id, item.name)}
                                                className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit space-y-6">
                            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

                            <div className="space-y-3 text-gray-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-gray-900">
                                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <span className="text-2xl font-black text-orange-600">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95"
                            >
                                Proceed to Checkout
                            </button>

                            <p className="text-xs text-gray-400 text-center">
                                Free delivery on orders over $50. <br />
                                Secure checkout by Stripe.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;