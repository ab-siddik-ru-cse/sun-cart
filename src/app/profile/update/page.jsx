"use client";

import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { GrUpdate } from "react-icons/gr";
import { IoArrowBackSharp } from "react-icons/io5";


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
    <div className="min-h-screen border border-gray-200 py-12 px-4">
      <div className="max-w-xl mx-auto">

        <div className="text-center text-gray-400 hover:text-orange-500 mt-8 flex items-center justify-center gap-2 mb-10">
          <IoArrowBackSharp />
          <Link href="/profile" className="text-gray-400 hover:text-orange-500 font-medium transition-colors">
            Back to profile
          </Link>
        </div>

        <div className="card bg-white border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="bg-orange-500  p-8 text-center text-white">
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
                <span className="label-text font-bold text-gray-700 uppercase text-xs tracking-widest ">
                  Full Name
                </span>
              </label>
              <br />

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full h-12 bg-gray-50 border-gray-200 focus:input-warning mt-2"
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
                className="input input-bordered w-full h-12 bg-gray-50 border-gray-200 focus:input-warning mt-2"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />

              <label className="label">
                <span className="label-text-alt text-gray-400 mt-2">
                  Use a direct image link for best results.
                </span>
              </label>
            </div>

            {/* Preview */}
            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-sm border border-gray-200">
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
              className="btn bg-white hover:bg-orange-600 hover:text-white border border-orange-600 text-orange-600 w-full h-12 text-lg font-semibold  rounded-sm transition-all flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="loading loading-spinner loading-sm"></span>
              )}
              {loading ? "Saving Changes..." : <div className="flex items-center justify-center gap-2"><GrUpdate /> Update changes</div>}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;