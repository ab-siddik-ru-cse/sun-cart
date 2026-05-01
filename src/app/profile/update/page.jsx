"use client";

import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error(error.message || "Update failed!");
      } else {
        toast.success("Profile updated successfully!");
        router.push("/profile"); // redirect
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-xl mx-auto">

        {/* Back Button */}
        <Link href="/profile" className="btn btn-ghost btn-sm mb-6 text-gray-500">
          Back to Profile
        </Link>

        <div className="card bg-white shadow-2xl border border-orange-100 overflow-hidden">

          {/* Header */}
          <div className="bg-orange-500 p-8 text-center text-white">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Update Information
            </h2>
            <p className="opacity-80 text-sm">
              Refine your SunCart identity
            </p>
          </div>

          <form onSubmit={handleUpdate} className="card-body p-8 space-y-4">

            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700 uppercase text-xs tracking-widest">
                  Full Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full h-12 bg-gray-50 border-gray-200 focus:input-warning"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-700 uppercase text-xs tracking-widest">
                  Profile Photo URL
                </span>
              </label>

              <input
                type="text"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full h-12 bg-gray-50 border-gray-200 focus:input-warning"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />

              <label className="label">
                <span className="label-text-alt text-gray-400">
                  Use a direct image link for best results.
                </span>
              </label>
            </div>

            {/* Preview */}
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="avatar">
                <div className="w-16 rounded-xl">
                  <img
                    src={image || "https://i.pravatar.cc/150"}
                    alt="Preview"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-orange-600">
                  Live Preview
                </p>
                <p className="text-xs text-gray-500 truncate w-40 md:w-64">
                  {name || "Your Name"}
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn bg-orange-500 hover:bg-orange-600 border-none text-white w-full h-14 text-lg font-bold shadow-lg shadow-orange-200 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="loading loading-spinner loading-sm"></span>
              )}
              {loading ? "Saving Changes..." : "Update Information"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;