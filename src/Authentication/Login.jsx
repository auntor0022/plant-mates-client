import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loinImg from "../assets/login_img.jpg";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

  useEffect(() => {
          document.title = "Plant Mates | login";
        }, []);

  const { userLogin,googleLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    const upperRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (password.length < 8) {
      setError("Password must be at least 8 character");
      return;
    } else if (!upperRegex.test(password)) {
      setError("Password must be contain one uppercase");
      return;
    } else if (!lowerRegex.test(password)) {
      setError("Password must be contain one lowercase");
      return;
    } else if (!specialCharRegex.test(password)) {
      setError("Password must be contain one special character");
      return;
    }

    userLogin(email, password)
      .then((result) => {
        console.log(result);
        toast.success("login Successfull");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        alert("Login Successfull");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" flex items-center justify-center px-4 mt-20">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left: Form Area */}
        <div className="w-full md:w-1/2 p-10 md:p-14 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Welcome Back 🌱
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Please login to continue
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>

          

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent cursor-pointer transition duration-300 text-white py-3 rounded-xl text-lg font-semibold shadow-md"
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl text-sm font-medium text-gray-700 hover:shadow-md hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </div>
          </div>

          {/* Register */}
          <p className="text-center text-neutral text-sm mt-8">
            Don’t have an account?{" "}
            <Link
              to={"/register"}
              className="text-secondary font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Right: Image Area */}
        <div className="hidden md:block md:w-1/2 relative">
          <img src={loinImg} alt="Login Visual" className=" object-cover" />
          {/* Optional overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-20 rounded-tr-3xl rounded-br-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
