import React from 'react';
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";
import linked from "../assets/linked.png";

const Footer = () => {
  return (
    <footer className="text-white py-4 px-6 w-full flex flex-col md:flex-row justify-between items-center mt-5">
      {/* Left Section */}
      <div className="mb-2 sm:mb-0">
        <p className="text-center text-xs sm:text-[0.75rem] md:text-sm lg:text-base">
          &copy; {new Date().getFullYear()} PrepBot. All rights reserved.
        </p>
      </div>

      {/* Middle Section - Social Media Icons */}
      <div className="flex space-x-4 mb-2 sm:mb-0">
        <a href="#">
          <img className="w-4 sm:w-5 md:w-6 lg:w-8" src={facebook} alt="Facebook" />
        </a>
        <a href="#">
          <img className="w-4 sm:w-5 md:w-6 lg:w-8" src={insta} alt="Instagram" />
        </a>
        <a href="#">
          <img className="w-4 sm:w-5 md:w-6 lg:w-8" src={x} alt="Twitter" />
        </a>
        <a href="#">
          <img className="w-4 sm:w-5 md:w-6 lg:w-8" src={linked} alt="LinkedIn" />
        </a>
      </div>

      {/* Right Section - Links */}
      <div className="flex space-x-4">
        <a href="/privacy" className="text-center text-xs sm:text-[0.75rem] md:text-sm lg:text-base hover:text-gray-400">
          Privacy Policy
        </a>
        <a href="/terms" className="text-center text-xs sm:text-[0.75rem] md:text-sm lg:text-base hover:text-gray-400">
          Terms of Service
        </a>
        <a href="/contact" className="text-center text-xs sm:text-[0.75rem] md:text-sm lg:text-base hover:text-gray-400">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;