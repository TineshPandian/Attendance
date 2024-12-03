"use client";
import React, { useState } from "react";
import Image from "next/image";

function Signup() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert("Form submitted successfully!");
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
   
      <div className="lg:w-1/2 w-full relative flex-shrink-0 h-50 lg:h-cover">
        <Image
          src="/images/AppleImage.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-b-lg lg:rounded-none"
        />
        <div className="absolute top-5 left-5 text-white text-2xl font-bold">
          <Image src="/images/image.png" width={200} height={50} alt="Logo" />
        </div>
      </div>

    
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-50 px-6 py-10 lg:py-20">
        <div className="max-w-md w-full p-8">
          <p className="text-2xl font-bold text-center mb-2">
            Create Your Account
          </p>
          <p className="text-gray-500 text-center mb-6">
            Welcome! Let's get started
          </p>

          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email ID"
              className="w-full border rounded-lg p-2 mb-4"
              required
            />
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full border rounded-lg p-2 mb-4"
              required
            />
            <label className="block text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              placeholder="Re-enter your Password"
              className="w-full border rounded-lg p-2 mb-4"
              required
            />
            
        
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700">
               By signing up , you agree to our {" "}
                <a href="#" className="text-blue-500 ">
                  Terms of Service
                </a>
               {" "}  and {" "}
               <a href="#" className="text-blue-500 ">
                 Privacy Policy
                </a>
              </label>
            </div>

           
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </form>

          <div className="mt-10 ">
            <span className="mr-2 font-bold">
             Note:
            </span>
            <span>
             Your password should be at least 8 characters long, include both upper and lower case letters, a number, and a special character.
            </span>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
