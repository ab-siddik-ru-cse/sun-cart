"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        
        await authClient.signUp.email({
            email: formData.email,
            password: formData.password,
            name: formData.name,
            image: formData.image,
            callbackURL: "/login",
        }, {
            onError: (ctx) => {
                console.log(ctx);

            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50 px-4 py-10">
            <div className="card w-full max-w-md bg-white shadow-2xl border border-yellow-100">
                <div className="card-body">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                            Create <span className="text-yellow-500">Account</span>
                        </h2>
                        <p className="text-gray-500 text-sm">Join SunCart for exclusive summer deals</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-3">
                        <div className="form-control">
                            <label className="label py-1 font-semibold text-gray-700">Full Name</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Jhon Doe"
                                className="input w-full input-bordered input-sm h-10 focus:input-warning bg-gray-50 border-gray-200"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label py-1 font-semibold text-gray-700">Email Address</label>
                            <br />
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className="input w-full input-bordered input-sm h-10 focus:input-warning bg-gray-50 border-gray-200"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label py-1 font-semibold text-gray-700">Photo URL</label>
                            <br />
                            <input
                                type="text"
                                placeholder="https//:www.webpic.com"
                                className="input w-full input-bordered input-sm h-10 focus:input-warning bg-gray-50 border-gray-200"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label py-1 font-semibold text-gray-700">Password</label>
                            <br />
                            <input
                                type="password"
                                placeholder="********"
                                className="input w-full input-bordered input-sm h-10 focus:input-warning bg-gray-50 border-gray-200"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={`btn bg-yellow-500 hover:bg-yellow-600 border-none text-white w-full mt-6 font-bold text-lg rounded-full ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-yellow-600 font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;