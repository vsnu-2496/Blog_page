import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import tichiLogo from "../imgs/tichi_logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <img src={tichiLogo} alt="Logo" className="h-12 mb-2" />
          <p className="text-gray-400 text-sm">
            Make life easier!
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <a
            href="mailto:supportteam@tichi.app"
            className="block text-gray-400 hover:text-white transition"
          >
            supportteam@tichi.app
          </a>
          <a
            href="mailto:grievance@tichi.app"
            className="block text-gray-400 hover:text-white transition"
          >
            grievance@tichi.app
          </a>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex items-center space-x-4 text-gray-400">
            <a 
              href="https://youtube.com/@tichi_app?si=5tzZsa2LYJU8YXq2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition"
            >
              <FaYoutube size={20} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61578128340883" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/tichi_app?igsh=MWRpMHZuODE5OTI3bw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://x.com/tichi_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 transition"
            >
              <FaXTwitter size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tichi-app-26a390374/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Legal</h4>
          <a 
            href="https://tichi.app/termsAndConditions" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-gray-400 hover:text-white transition"
          >
            Terms and Conditions
          </a>
          <a 
            href="https://tichi.app/privacyPolicy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2025 Tichi. All rights reserved.
      </div>
    </footer>
  );
}
