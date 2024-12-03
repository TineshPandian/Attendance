"use client";

import React, { useState } from "react";
import { changePasswordRequest } from "../../Service/Authentication.service";
import theme from "../theme";

const ChangePasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await changePasswordRequest(newPassword);
      if (response && response.success) {
        setMessage("Password changed successfully.");
      } else {
        setError(response?.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Failed to change password. Please try again later.");
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
          backgroundImage: "url(/images/changepassword.jpg)",
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
            Reset Your Password
          </h2>
          <p className="text-sm lg:text-sm mb-6 text-zinc-500">
            Create a new password to regain access to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block font-medium mb-2 text-sm"
              style={{ color: theme.colors.text }}
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Enter your new password"
              style={{ fontFamily: theme.fontFamily }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block font-medium mb-2 text-sm"
              style={{ color: theme.colors.text }}
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Re-enter your new password"
              style={{ fontFamily: theme.fontFamily }}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded text-white text-sm "
            style={{
              backgroundColor: theme.colors.button,
              fontFamily: theme.fontFamily,
            }}
          >
            Reset Password
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

        <div className="mt-6 w-full "
        style={{ fontFamily: theme.fontFamily }}>
          <p className="text-sm text-left lg:text-base text-zinc-700 font-light">
            <span className="font-bold text-zinc-900">Note:</span>
             Your password should be at least 8 characters long, include
             both  upper <br /> and lower case letters,a number, and a special 
            character.
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

export default ChangePasswordPage;
