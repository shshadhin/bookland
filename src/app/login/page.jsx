'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const SignInPage = () => {
   const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries());
      // console.log(user);
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });
      console.log('Data', data, error);
      if (data) {
        redirect('/')
      }
      if (error) {
        toast.error('This email is already used');
      }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] relative overflow-hidden px-4 py-10">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-[32px] shadow-2xl p-6 sm:p-10">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-5 text-sm sm:text-lg">
              Sign in to continue to Book Land
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-7">
            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-3">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full border border-gray-300 rounded-lg py-3.5 pl-12 pr-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-3">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg py-3.5 pl-12 pr-4 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-[1.02] transition-all duration-300 text-white font-bold py-3.5 rounded-2xl shadow-lg text-lg"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-9">
            <div className="flex-1 h-[1px] bg-gray-200"></div>

            <p className="text-gray-500 text-sm font-medium">
              Or continue with
            </p>

            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Google Button */}
          <button className="w-full border border-gray-300 rounded-xl py-3.5 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle size={24} />

            <span className="font-semibold text-gray-700">
              Continue with Google
            </span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm sm:text-base text-gray-500 mt-10">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="text-yellow-600 font-bold hover:underline"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
