import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAF5] text-[#2E2E2E] mt-20 rounded-t-3xl shadow-inner">
      <div className="container md:place-items-center mx-auto py-14 grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center">
            <img src={logo} className="w-16" alt="Plant Mates Logo" />
            <h2 className="text-3xl font-extrabold flex items-center gap-2 text-primary">
              Plant Mates
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#68B047] to-[#A0D468] rounded-full my-2"></div>
          <p className="text-sm mt-3">
            Welcome to{" "}
            <span className="font-semibold text-[#68B047]">Plant Mates</span> —
            a thriving community for gardening enthusiasts. Share your tips,
            discover plant care ideas, and grow together!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#68B047] mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/contact"
                className="hover:text-primary transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-primary transition duration-300"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-primary transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/explore"
                className="hover:text-primary transition duration-300"
              >
                Explore Gardeners
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#68B047] mb-3">
            Get in Touch
          </h3>
          <p className="text-sm mb-4">info@plantmates.com</p>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="mailto:info@plantmates.com"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-accent py-4 text-center text-sm bg-[#E6F0D4] rounded-b-3xl">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">Plant Mates</span>.
          Cultivating connections, one plant at a time 🌱.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
