"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaGithubSquare, FaLocationArrow } from "react-icons/fa";
import { IoCall, IoLogoInstagram } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white tracking-tight animate__animated animate__pulse animate__infinite animate__slow ">
              JOIN THE <span className="text-orange-500">SUNCART</span> CLUB
            </h2>
            <p className="text-sm text-gray-500 mt-1">Get 20% off on your first summer order!</p>
          </div>
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-l-sm bg-gray-800 border border-gray-800 focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 border-none text-white rounded-r-sm px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-black text-white tracking-tighter">
            SUN<span className="text-orange-500">CART</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Your ultimate destination for premium summer essentials. From UV protection to beachwear, we bring the sunshine to your doorstep.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-circle btn-sm bg-white hover:bg-orange-500 border-none">
              <FaFacebookSquare size={18} color="black" />
            </button>
            <button className="btn btn-circle btn-sm bg-white hover:bg-orange-500 border-none">
              <IoLogoInstagram size={18} color="black" />
            </button>
            <button className="btn btn-circle btn-sm bg-white hover:bg-orange-500 border-none">
              <FaGithubSquare size={18} color="black" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/products" className="hover:text-orange-500 transition-colors">All Products</Link></li>
            <li><Link href="/profile" className="hover:text-orange-500 transition-colors">My Account</Link></li>
            <li><Link href="/cart" className="hover:text-orange-500 transition-colors">Shopping Cart</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Order History</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Customer Support</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Help Center</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Store Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-orange-500"><FaLocationArrow size={18} /></span>
              <span>Rajshahi, Bangladesh</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500"><IoCall  size={18}/></span>
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500"><MdEmail size={18} /></span>
              <span>support@suncart.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
          <p>© 2026 SunCart. Created by AB Siddik.</p>
          <div className="flex gap-6">
            <span>Security</span>
            <span>Cookies</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;