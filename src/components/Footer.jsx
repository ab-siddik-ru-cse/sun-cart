import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-16 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl font-bold tracking-tighter text-white">
                SunCart
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium products for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-6 text-lg">Social Links</h3>
            <ul className="space-y-4 text-black flex gap-5">
              <li className="transition-all duration-300 ease-in-out hover:scale-105">
                <a href="" className="">
                  <FaFacebook color="#4267B2" size="2em" />
                </a>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:scale-105">
                <a href="" className="">
                  <FaInstagram color="#E1306C" size="2em" />
                </a>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:scale-105">
                <a href="" className="">
                  <FaXTwitter color="#1DA1F2" size="2em" />
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} SunCart. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;