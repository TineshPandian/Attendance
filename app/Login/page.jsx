"use client";

import React, { useState } from "react";
import Image from "next/image";
import theme from "../theme"; 

const Login = () => {
  const [activeForm, setActiveForm] = useState("Employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    
    try {
     
      const response = await sendLoginRequest(email, password);
      if (response.success) {
        setMessage("Successfully logged in!");
      } else {
        setError(response?.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Failed to log in. Please try again later.");
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
        style={{ backgroundImage: "url(/images/login.jpg)" }}
      >
        {/* Logo */}
        <div className="absolute top-5 left-5 text-white text-2xl font-bold">
          <Image src="/images/image.png" width={200} height={50} alt="Logo" />
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
            Welcome Back!
          </h2>
          <p className="text-sm lg:text-sm mb-6 text-zinc-500">
            Log in to continue where you left off and enjoy our seamless
            experience.
          </p>
        </div>

        {/* Form Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`mr-4 px-4 py-2 ${
              activeForm === "Admin"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveForm("Admin")}
          >
            Admin
          </button>
          <button
            className={`px-4 py-2 ${
              activeForm === "Employee"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveForm("Employee")}
          >
            Employee
          </button>
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-medium mb-2 text-sm"
              style={{ color: theme.colors.text }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Enter your password"
              style={{ fontFamily: theme.fontFamily }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded text-white text-sm"
            style={{
              backgroundColor: theme.colors.button,
              fontFamily: theme.fontFamily,
            }}
          >
            Login as {activeForm}
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

export default Login;
