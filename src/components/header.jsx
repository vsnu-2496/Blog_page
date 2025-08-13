import React from "react";
import { FaFacebookF, FaLinkedinIn, FaLink, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogPoster from "../imgs/banner.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast.success("Link copied!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch(() => {
        toast.error("Failed to copy link");
      });
  };

  return (
    <div
      className="relative w-full h-36 bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${blogPoster})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-between w-full px-6 py-4 text-white">
        
        {/* Left */}
        <div className="flex items-center gap-8">
          <div>
            <p className="text-sm opacity-80">Published on</p>
            <p className="font-semibold">17 Jan 2022</p>
          </div>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1 border border-white px-2 py-1 rounded hover:bg-white hover:text-black transition"
          >
            <FaLink /> Copy link
          </button>

          <a href="https://www.linkedin.com/in/tichi-app-26a390374/" target="_blank" rel="noopener noreferrer"
            className="p-2 border border-white rounded hover:bg-white hover:text-black transition">
            <FaLinkedinIn />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61578128340883" target="_blank" rel="noopener noreferrer"
            className="p-2 border border-white rounded hover:bg-white hover:text-black transition">
            <FaFacebookF />
          </a>

          <a href="https://x.com/tichi_app" target="_blank" rel="noopener noreferrer"
            className="p-2 border border-white rounded hover:bg-white hover:text-black transition">
            <FaXTwitter />
          </a>

          <a href="https://www.instagram.com/tichi_app?igsh=MWRpMHZuODE5OTI3bw==" target="_blank" rel="noopener noreferrer"
            className="p-2 border border-white rounded hover:bg-white hover:text-black transition">
            <FaInstagram />
          </a>

          <a href="https://youtube.com/@tichi_app?si=5tzZsa2LYJU8YXq2" target="_blank" rel="noopener noreferrer"
            className="p-2 border border-white rounded hover:bg-white hover:text-black transition">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Header;
