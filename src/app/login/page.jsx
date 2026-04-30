"use client";

import React, { useState } from "react";
import Link from "next/link";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        }, {
            onError: (ctx) => {
                toast.error(ctx.error.message || "Login failed!");
                setLoading(false);
            }
        });
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 px-4">
            <div className="card w-full max-w-md bg-white shadow-2xl border border-orange-100">
                <div className="card-body">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                            Welcome <span className="text-orange-500">Back!</span>
                        </h2>
                        <p className="text-gray-500 text-sm">Log in to access your summer essentials</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Email</label>
                            <br />
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className="input w-full input-bordered focus:input-warning bg-gray-50 border-gray-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Password</label>
                            <br />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input w-full input-bordered focus:input-warning bg-gray-50 border-gray-200"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={`btn bg-orange-500 hover:bg-orange-600 border-none text-white w-full mt-4 font-bold text-lg rounded-full ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="divider text-gray-400 text-xs uppercase">OR</div>

                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline btn-warning w-full rounded-full flex items-center gap-2 font-bold"
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
                        Continue with Google
                    </button>

                    <p className="text-center mt-6 text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-orange-500 font-bold hover:underline">
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;