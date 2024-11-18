"use client";
import React, { useState } from "react";
import Image from "next/image";

function Login() {
  const [activeForm, setActiveForm] = useState("Employee");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
    
      <div className="lg:w-1/2 w-full relative flex-shrink-0 h-50 lg:h-cover">
        <Image
          src="/images/Focused Tech Professional.jpg"
          alt="Tech Professional"
          layout="fill"
          objectFit="cover"
          className="rounded-b-lg lg:rounded-none"
        />
        <div className="absolute top-5 left-5 text-white text-2xl font-bold">
         <Image src="/images/image.png" width={200} height={50} />
        </div>
      </div>

    
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-50 px-6 py-10 lg:py-20">
        <div className="max-w-md w-full p-8">
        
          <p className="text-2xl font-bold text-center mb-2">Welcome Back!</p>
          <p className="text-gray-500 text-center mb-6">
            Log in to continue where you left off and enjoy our seamless
            experience.
          </p>

         
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

       
          {activeForm === "Admin" && (
          <div>
            <form>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Admin Email ID"
                className="w-full border rounded-lg p-2 mb-4"
              />
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Admin Password"
                className="w-full border rounded-lg p-2 mb-4"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Login as Admin
              </button>
            </form>
          </div>
        )}
        {activeForm === "Employee" && (
          <div>
            <form>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Employee Email ID"
                className="w-full border rounded-lg p-2 mb-4"
              />
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Employee Password"
                className="w-full border rounded-lg p-2 mb-4"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Login as Employee
              </button>
            </form>
          </div>
        )}
       
          <div className="mt-10 text-sm text-center text-gray-500">
            <span className="mr-4 cursor-pointer hover:text-gray-700">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-gray-700">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
