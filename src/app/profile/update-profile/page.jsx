'use client';

import { authClient } from '@/lib/auth-client';
import { Button, Input } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaImage, FaUser } from 'react-icons/fa';

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [name, setName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');

  const handleUpdate = async e => {
    e.preventDefault();

    try {
      await authClient.updateUser({
        name,
        image,
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        {/* Back Button */}
        <Link href="/profile">
          <button className="mb-6 flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition">
            <FaArrowLeft />
            Back to Profile
          </button>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-[30px] shadow-2xl p-8 md:p-12">
          {/* Profile Preview */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={image || 'https://i.ibb.co.com/5W1Jz4w/default-user.png'}
                alt="profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mt-6">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 to-pink-500 bg-clip-text text-transparent">
              Update Information
            </h1>

            <p className="text-gray-500 text-lg mt-3">
              Refresh your name and avatar
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdate} className="mt-10 space-y-6">
            {/* Name */}
            <div>
              <label className="font-semibold text-gray-700 mb-2 block">
                Full Name
              </label>

              <Input
                type="text"
                size="lg"
                startContent={<FaUser className="text-gray-400" />}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="font-semibold text-gray-700 mb-2 block">
                Image URL
              </label>

              <Input
                type="text"
                size="lg"
                startContent={<FaImage className="text-gray-400" />}
                value={image}
                onChange={e => setImage(e.target.value)}
                placeholder="Enter image url"
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full h-14 text-lg font-bold rounded-2xl bg-indigo-700 hover:bg-indigo-800 text-white shadow-xl"
            >
              Update Information
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
