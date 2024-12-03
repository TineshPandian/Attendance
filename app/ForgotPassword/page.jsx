"use client";

import React, { useState } from "react";
import { sendOtpRequest } from "../../Service/Authentication.service";
import theme from "../theme"; 


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
          backgroundImage: "url(/images/forgotpassword_1.jpg)",
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
            Forgot Your Password?
          </h2>
          <p className="text-sm lg:text-sm mb-6 text-zinc-500">
            Enter your registered email address, and we’ll send you a one-time
            password (OTP) to reset your password.
          </p>
        </div>

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
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Enter your email"
              style={{ fontFamily: theme.fontFamily }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 rounded text-white text-sm"
            style={{
              backgroundColor: theme.colors.button,
              fontFamily: theme.fontFamily,
            }}
          >
            Send OTP
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

        <div className="mt-8 text-center">
          <a
            href="/Login"
            className="text-sm font-medium"
            style={{ color: theme.colors.heading }}
          >
            ← Back to log in
          </a>
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

export default ForgotPasswordPage;
