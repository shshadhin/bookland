'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={
                user?.image || 'https://i.ibb.co.com/5W1Jz4w/default-user.png'
              }
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center mt-6">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent">
            {user?.name || 'User Name'}
          </h1>

          <p className="text-gray-500 text-lg mt-2">
            {user?.email || 'user@gmail.com'}
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link href="/profile/update-profile">
            <Button className="w-full h-14 text-lg font-bold rounded-2xl bg-yellow-500 hover:bg-yellow-700 text-white shadow-lg">
              Update Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
