import React from "react";
import { Link } from "react-router";
import errorImg from "../assets/404-error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAF5] text-center px-4">
      {/* Error Image */}
      <img src={errorImg} alt="404 Not Found" className="w-80 md:w-[600px] mb-6" />

      {/* Message */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#004B8D] mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="btn bg-primary text-white px-6 py-2 rounded-lg text-lg hover:bg-secondary transition"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
