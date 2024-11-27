"use client";

import React, { useState } from "react";
import { sendOtpRequest } from "../../Service/Authentication.service";
import theme from "../theme"; // Import the theme

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await sendOtpRequest(email);
      if (response && response.success) {
        setMessage("OTP has been sent to your email.");
      } else {
        setError(response?.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again later.");
    }
  };

  return (
    <div
      className="min-h-screen grid grid-cols-1 p-6 lg:grid-cols-2 overflow-hidden"
      style={{
        fontFamily: theme.fontFamily,
        backgroundColor: theme.colors.background,
      }}
    >
      {/* Left Image Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url(/images/forgotpassword_1.jpg)" }}
      >
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <img
            src="/path-to-your-logo.png" // Replace with your logo path
            alt="Logo"
            className="h-10"
          />
        </div>
      </div>

      {/* Right Form Section */}
      <div
        className="flex flex-col justify-center items-center px-8 lg:px-16 py-10"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div className="text-center w-full">
          <h2
            className="text-xl lg:text-2xl font-bold mb-4"
            style={{ color: theme.colors.heading }}
          >
            Forgot Your Password?
          </h2>
          <p
            className="text-sm lg:text-sm mb-6 text-zinc-500"
          >
            Enter your registered email address, and we’ll send you a one-time
            password (OTP) to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full mt-5">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium mb-2 text-sm"
              style={{ color: theme.colors.text }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Enter your email"
              style={{ fontFamily: theme.fontFamily }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded text-white text-sm "
            style={{
              backgroundColor: theme.colors.button,
              fontFamily: theme.fontFamily,
            }}
          >
            Send OTP
          </button>
        </form>

        {/* Messages */}
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

        {/* Back to Login */}
        <div className="mt-4 text-center">
          <a
            href="/login"
            className="text-sm font-medium"
            style={{ color: theme.colors.link }}
          >
            ← Back to log in
          </a>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-xs text-gray-500">
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

export default ForgotPasswordPage;
