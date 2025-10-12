import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import registerImg from "../assets/register_img.jpg";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

  useEffect(() => {
        document.title = "Plant Mates | register";
      }, []);

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { createUser, updateUser, setUser, googleLogin } = use(AuthContext);
  // console.log(createUser);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // console.log(name, email, photo, password);

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

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          alert("registration successfull");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user)
        toast.success("Login Successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-20 flex items-center justify-center px-4">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left: Image Area */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src={registerImg}
            alt="Sign Up Visual"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20 rounded-tl-3xl rounded-bl-3xl"></div>
        </div>

        {/* Right: Form Area */}
        <div className="w-full md:w-1/2 p-10 md:p-14 relative">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Sign up</h1>
          <p className="text-gray-500 mb-10 text-lg">
            Sign up and help us help you
          </p>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-6" noValidate>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              required
            />

            <input
              name="photo"
              type="url"
              placeholder="Photo URL"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-primary transition hover:bg-accent cursor-pointer duration-300 text-white py-3 rounded-xl text-lg font-semibold shadow-md"
            >
              Sign up
            </button>
          </form>

          {/* Google Login Button */}
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
                Sign up with Google
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-secondary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
