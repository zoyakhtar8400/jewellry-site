import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://glitzzera-backend.vercel.app/api/users/login",
        {
          email,
          password,
        }
      );

      setMessage("Login successful!");
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      navigate("/category");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mb-20 bg-white px-2 sm:px-4 relative">
      {/* Top right necklace image */}
      <img
        src="/assets/necklace2.jpg"
        alt="Jewellery"
        className="hidden xs:block absolute top-2 right-2 w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-lg shadow-lg z-10"
      />

      <h1 className="text-xl sm:text-3xl font-semibold mb-6">LOGIN</h1>

      <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
        {/* Email Input */}
        <div className="w-full mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-12 border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm bg-white shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="w-full mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm bg-white shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-black text-white py-3 uppercase tracking-widest text-sm mb-4 font-semibold rounded shadow-md transition-all duration-200 disabled:opacity-60"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-opacity-60"></span>
              Signing In...
            </span>
          ) : (
            "Sign In"
          )}
        </button>

        {/* Forgot Password */}
        <button className="text-sm text-gray-600 hover:text-gray-800 mb-6">
          Forgot Password?
        </button>

        {message && (
          <div
            className={`mb-4 text-center text-sm ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}

        {/* Sign Up Link */}
        <p className="mb-4 text-center text-sm">
          Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 cursor-pointer hover:underline ml-1"
          >
            Sign Up
          </span>
        </p>

        {/* Divider */}
        <div className="flex items-center w-full mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="w-full mb-3 flex flex-col gap-2">
          <button
            className="flex items-center justify-center w-full border border-gray-400 py-2 rounded hover:bg-gray-100 bg-white text-gray-700 font-medium gap-2 shadow-sm"
            type="button"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-sm">Sign in with Google</span>
          </button>
        </div>

        {/* Facebook login */}
        <button className="flex items-center justify-center w-full border border-gray-400 py-2 rounded hover:bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700">Sign in with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
