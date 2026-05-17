'use client';

import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  const handleBrowseCollection = async () => {
    const session = await authClient.getSession();

    // user logged in
    if (session?.data) {
      router.push('/all-books');
    }

    // user not logged in
    else {
      router.push('/login');
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 mb-16 px-4">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 border border-base-200/50 shadow-sm overflow-hidden py-20 px-6 md:px-16 text-center flex flex-col items-center justify-center">
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-base-100 border border-base-200 shadow-sm text-sm font-medium text-base-content/80">
          Welcome to Book Land
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-base-content tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Find Your Next <span className="text-yellow-400">Great Read</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover thousands of books through our community of readers. Borrow,
          rent, or exchange books with fellow book lovers near you.
        </p>

        {/* Button */}
        <div className="items-center">
          <button
            onClick={handleBrowseCollection}
            className="btn btn-warning btn-lg rounded-full px-8 shadow-md hover:shadow-primary/30 transition-all text-base font-semibold border-none"
          >
            Browse Collection
            <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;