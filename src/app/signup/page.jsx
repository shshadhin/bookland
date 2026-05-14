'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaEnvelope, FaImage, FaLock, FaUser } from 'react-icons/fa';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] relative overflow-hidden px-4 py-10">
      
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        
        <div className="bg-white rounded-[28px] shadow-2xl p-6 sm:p-10">
          
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-yellow-500">
              Create Account
            </h1>

            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Join Book Land and start reading
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-5">
            
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Full Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Image URL
              </label>

              <div className="relative">
                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="w-full border border-gray-300 rounded-lg py-3 pl-11 pr-4 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-[1.02] transition-all duration-300 text-white font-bold py-3 rounded-xl shadow-lg"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="flex-1 h-[1px] bg-gray-200"></div>

            <p className="text-sm text-gray-500">Or signup with</p>

            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Google Button */}
          <button className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle size={24} />

            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};


export default SignUpPage;

