"use client"
import Image from "next/image"

function Signup(){
    return(
        <div className="flex flex-col lg:flex-row min-h-screen">
    
      <div className="lg:w-1/2 w-full relative flex-shrink-0 h-50 lg:h-cover">
        <Image
          src="/images/AppleImage.jpg"
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
        
          <p className="text-2xl font-bold text-center mb-2">Create Your Account</p>
          <p className="text-gray-500 text-center mb-6">
          Welcome! Let's get started
          </p>

         
         

       
          <form>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email ID"
              className="w-full border rounded-lg p-2 mb-4"
            />
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full border rounded-lg p-2 mb-4"
            />
            <label className="block text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              placeholder="Re-enter your Password"
              className="w-full border rounded-lg p-2 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
             Register
            </button>
          </form>

       
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
    )
}

export default Signup