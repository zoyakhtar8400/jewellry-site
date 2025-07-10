import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Dummy OTP logic for demo
  const handleGetOtp = () => {
    if (!/^\d{10}$/.test(phone)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setMessage("OTP sent to +91 " + phone);
      setLoading(false);
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid OTP. Try 123456 for demo.");
    }
  };

  // Facebook SDK setup
  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : 'YOUR_FACEBOOK_APP_ID', // <-- Replace with your Facebook App ID
          cookie     : true,
          xfbml      : true,
          version    : 'v19.0'
        });
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }, []);

  const handleFacebookLogin = () => {
    if (!window.FB) {
      setMessage("Facebook SDK not loaded");
      return;
    }
    window.FB.login(function(response) {
      if (response.authResponse) {
        window.FB.api('/me', {fields: 'name,email,picture'}, function(userInfo) {
          setMessage(`Facebook login successful! Welcome, ${userInfo.name}`);
        });
      } else {
        setMessage("Facebook login failed or cancelled.");
      }
    }, {scope: 'public_profile,email'});
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-2 sm:px-4 relative">
      {/* Top right necklace image */}
      <img 
        src="/assets/necklace2.jpg"
        alt="Jewellery"
        className="hidden xs:block absolute top-2 right-2 w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-lg shadow-lg z-10"
      />
      <h1 className="text-xl sm:text-3xl font-semibold mb-4">LOGIN</h1>
      {/* Phone number input section */}
      <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="flex w-full items-center mb-4 gap-0 flex-col xs:flex-row xs:gap-2">
          <div className="flex w-full xs:w-auto items-center">
            <span className="flex items-center h-12 px-4 border border-gray-300 bg-gray-100 rounded-l-md text-xs sm:text-base select-none min-w-[56px] sm:min-w-[72px] justify-center" style={{ borderRight: 'none' }}>+91</span>
            <input
              type="tel"
              placeholder="Phone Number"
              className="h-12 w-full xs:w-40 border border-gray-300 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-base text-center min-w-[120px] sm:min-w-[160px] bg-white shadow-sm"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none' }}
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              disabled={otpSent}
              maxLength={10}
            />
          </div>
        </div>

        {/* Get OTP or Verify OTP */}
        {!otpSent ? (
          <button
            className="w-full bg-gradient-to-r  bg-black text-white py-2 uppercase tracking-widest text-sm mb-6 font-semibold rounded shadow-md transition-all duration-200 disabled:opacity-60"
            onClick={handleGetOtp}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2"><span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-opacity-60"></span>Sending...</span>
            ) : "Get OTP"}
          </button>
        ) : (
          <>
            <div className="flex w-full mb-4 flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="text"
                value="OTP"
                readOnly
                className="h-12 min-w-[120px] sm:min-w-[160px] border border-gray-300 px-4 text-center rounded-t-md sm:rounded-t-none sm:rounded-l-md bg-gray-100 text-xs sm:text-base shadow-sm"
              />
              <input
                type="text"
                placeholder="Enter OTP"
                className="h-12 min-w-[120px] sm:min-w-[160px] border border-gray-300 px-4 rounded-b-md sm:rounded-b-none sm:rounded-r-md focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-base text-center bg-white shadow-sm"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                maxLength={6}
              />
            </div>
            <button
            className="w-full bg-gradient-to-r bg-black py-2 uppercase tracking-widest text-white text-sm mb-6 font-semibold rounded shadow-md  transition-all duration-200"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
          </>
        )}

        {message && <div className="mb-4 text-center text-sm text-red-500">{message}</div>}

        {/* Divider */}
        <div className="flex items-center w-full mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google login */}
        <div className="w-full mb-3 flex flex-col gap-2">
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* <-- Replace with your Google Client ID */}
            <GoogleLogin
              onSuccess={credentialResponse => {
                setMessage("Google login successful!");
                // You can decode credentialResponse.credential for user info
              }}
              onError={() => {
                setMessage("Google login failed");
              }}
              width="100%"
            />
          </GoogleOAuthProvider>
          <button
            className="flex items-center justify-center w-full border border-gray-400 py-2 rounded hover:bg-gray-100 bg-white text-gray-700 font-medium gap-2 shadow-sm"
            onClick={() => document.querySelector('div[aria-label="Sign in with Google"] button')?.click()}
            type="button"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-sm">Sign in with Google</span>
          </button>
        </div>

        {/* Facebook login */}
        <button
          className="flex items-center justify-center w-full border border-gray-400 py-2 rounded hover:bg-gray-100"
          onClick={handleFacebookLogin}
        >
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
