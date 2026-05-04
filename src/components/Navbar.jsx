'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinkStyle = path =>
    `relative pb-1 ${pathname === path ? 'text-yellow-400' : ''}`;

  const navItems = (
    <>
      <li className={navLinkStyle('/')}>
        <Link href="/">Home</Link>
      </li>
      <li className={navLinkStyle('/all-books')}>
        <Link href="/all-books">All Books</Link>
      </li>
      <li className={navLinkStyle('/profile')}>
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );

  return (
    <div className="border-b px-3 bg-yellow-100">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={45}
              height={45}
              className="object-contain"
            />
          </Link>

          <div className="">
            <h2 className="leading-tight">
              <span className="text-lg font-bold">Book</span>
              <span className="text-lg font-medium text-yellow-400">Land</span>
            </h2>
            <p className="text-xs text-gray-500">Book Store</p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {navItems}
        </ul>

        {/* RIGHT BUTTONS (desktop) */}
        <div className="hidden md:flex gap-3">
          <Link href="/login">
            <button className="btn btn-warning btn-sm">Login</button>
          </Link>
          <Link href="/signup">
            <button className="btn btn-warning btn-sm">Sign Up</button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md rounded-lg p-4 space-y-4">
          <ul className="flex flex-col gap-3 font-medium">{navItems}</ul>

          <div className="flex flex-col gap-2">
            <Link href="/login">
              <button className="btn btn-warning w-full">Login</button>
            </Link>
            <Link href="/signup">
              <button className="btn btn-warning w-full">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;