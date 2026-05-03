"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { GrLogin } from "react-icons/gr";
import { useSearchParams } from "next/navigation";

const LoginClient = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const searchParams = useSearchParams();

    const redirect = searchParams.get("redirect");

    const safeRedirect =
        redirect && typeof redirect === "string" && redirect.startsWith("/")
            ? redirect
            : "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await authClient.signIn.email(
                {
                    email,
                    password,
                    callbackURL: safeRedirect,
                },
                {
                    onError: (ctx) => {
                        toast.error(ctx.error.message || "Login failed!");
                        setLoading(false);
                    },
                }
            );
        } catch (err) {
            toast.error("Something went wrong!");
            setLoading(false);
        }
    };

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

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="card w-full max-w-md bg-white border border-gray-200">
                <div className="card-body">

                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-black text-gray-800">
                            Welcome <span className="text-orange-500">Back!</span>
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Log in to access your summer essentials
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">

                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className="input input-bordered w-full bg-gray-50 border-gray-200 mt-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full bg-gray-50 border-gray-200 mt-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn bg-white text-orange-600 hover:bg-orange-600 hover:text-white border border-orange-600 w-full mt-8 font-bold text-lg flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="loading loading-spinner loading-sm"></span>
                                    Logging in...
                                </>
                            ) : (
                                <>
                                    <GrLogin />
                                    Log in
                                </>
                            )}
                        </button>
                    </form>

                    <div className="divider text-gray-400 text-xs uppercase">OR</div>

                    <button
                        onClick={handleGoogleLogin}
                        disabled={googleLoading}
                        className="btn btn-outline btn-warning w-full flex items-center justify-center gap-2 font-bold"
                    >
                        {googleLoading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Redirecting...
                            </>
                        ) : (
                            <>
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    className="w-5 h-5"
                                    alt="google"
                                />
                                Continue with Google
                            </>
                        )}
                    </button>

                    <p className="text-center mt-6 text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-orange-500 font-bold hover:underline"
                        >
                            Register Now
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LoginClient;