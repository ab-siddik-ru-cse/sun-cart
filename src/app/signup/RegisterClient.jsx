"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const redirect = searchParams.get("redirect");

    const safeRedirect =
        redirect && typeof redirect === "string" && redirect.startsWith("/")
            ? redirect
            : "/";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    // 🔥 Google Login
    const handleGoogleLogin = async () => {
        setGoogleLoading(true);
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: safeRedirect,
            });
        } catch (err) {
            toast.error("Google login failed!");
            setGoogleLoading(false);
        }
    };

    // 🔥 Register
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await authClient.signUp.email(
                {
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                    image: formData.image,
                    callbackURL: "/login",
                },
                {
                    onSuccess: () => {
                        toast.success("Registration successful!");
                        router.push("/login");
                    },
                    onError: (ctx) => {
                        toast.error(ctx.error.message || "Register failed!");
                    },
                }
            );
        } catch (err) {
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
            <div className="card w-full max-w-md bg-white border border-gray-200 shadow-sm">
                <div className="card-body">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                            Create <span className="text-yellow-500">Account</span>
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Join SunCart for exclusive summer deals
                        </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="font-semibold text-gray-700 text-sm">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input w-full input-bordered h-10 mt-1 focus:input-warning bg-gray-50"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="font-semibold text-gray-700 text-sm">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className="input w-full input-bordered h-10 mt-1 focus:input-warning bg-gray-50"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Image */}
                        <div>
                            <label className="font-semibold text-gray-700 text-sm">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                placeholder="https://example.com/photo.jpg"
                                className="input w-full input-bordered h-10 mt-1 focus:input-warning bg-gray-50"
                                value={formData.image}
                                onChange={(e) =>
                                    setFormData({ ...formData, image: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="font-semibold text-gray-700 text-sm">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                className="input w-full input-bordered h-10 mt-1 focus:input-warning bg-gray-50"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* Submit Button Fixed */}
                        <button
                            type="submit"
                            className="btn bg-yellow-500 hover:bg-yellow-600 border-none text-white w-full mt-6 font-bold text-lg rounded-sm"
                            disabled={loading}
                        >
                            {loading && (
                                <span className="loading loading-spinner loading-sm"></span>
                            )}
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>

                    <div className="divider text-gray-400 text-xs uppercase my-6">
                        OR
                    </div>

                    {/* Google Button */}
                    <button
                        onClick={handleGoogleLogin}
                        disabled={googleLoading}
                        className="btn btn-outline btn-warning w-full rounded-sm flex items-center justify-center gap-2 font-bold"
                    >
                        {googleLoading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                                alt="google"
                            />
                        )}
                        {googleLoading ? "Redirecting..." : "Continue with Google"}
                    </button>

                    <p className="text-center mt-6 text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-yellow-600 font-bold hover:underline"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;