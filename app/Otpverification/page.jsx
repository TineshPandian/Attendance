"use client";

import React, { useState } from "react";
import { verifyOtpRequest } from "../../Service/Authentication.service";
import theme from "../theme";

const OtpVerificationPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await verifyOtpRequest(email, otp);
      if (response && response.success) {
        setMessage("OTP verified successfully.");
      } else {
        setError(response?.message || "OTP verification failed. Please try again.");
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again later.");
    }
  };

  return (
    <div
      className="flex flex-wrap lg:flex-nowrap min-h-screen p-6"
      style={{
        fontFamily: theme.fontFamily,
        backgroundColor: theme.colors.background,
      }}
    >
      {/* Left Image Section */}
      <div
        className="w-full lg:w-1/2 h-72 rounded-lg lg:h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/otpverification.jpg)", // Replace with the appropriate image path
        }}
      >
        <img
          src="/images/manvianlogo.png"
          alt="Logo"
          className="absolute top-10 left-10 h-8"
        />
      </div>

      {/* Right Form Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div className="text-center w-full">
          <h2
            className="text-xl lg:text-2xl font-bold mb-4"
            style={{ color: theme.colors.heading }}
          >
            Enter Verification code
          </h2>
          <p className="text-sm lg:text-sm mb-6 text-zinc-500">
            We've sent a one-time password (OTP) to your email. Please enter it below to continue 
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Enter the 6-digit code"
              style={{ fontFamily: theme.fontFamily }}
            />
          </div>
          
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded text-white text-sm"
            style={{
              backgroundColor: theme.colors.button,
              fontFamily: theme.fontFamily,
            }}
          >
            Verify code
          </button>
        </form>

        {message && (
          <p
            className="mt-4 text-center text-sm font-medium"
            style={{ color: theme.colors.success }}
          >
            {message}
          </p>
        )}
        {error && (
          <p
            className="mt-4 text-center text-sm font-medium"
            style={{ color: theme.colors.error }}
          >
            {error}
          </p>
        )}

<div className="mt-6 text-sm text-gray-700 text-center">
          <span>Didn't receive the code? </span>
          <button
            type="button"
            className="text-blue-500 font-medium hover:underline"
          >
            Resend OTP
          </button>
        </div>
        <div
          className="mt-6 w-full"
          style={{ fontFamily: theme.fontFamily }}
        >
          <p className="text-sm text-center lg:text-base text-zinc-700 font-light">
            <span className="font-bold text-zinc-900">Note:</span>
          The OTP is valid for 10 minutes.
          </p>
        </div>

        <div className="mt-24 text-center text-xs text-gray-500">
          <p>
            <a
              href="/privacy-policy"
              className="hover:underline"
              style={{ color: theme.colors.text }}
            >
              Privacy Policy
            </a>{" "}
            •{" "}
            <a
              href="/terms-conditions"
              className="hover:underline"
              style={{ color: theme.colors.text }}
            >
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;
