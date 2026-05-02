'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinkStyle = path =>
    `relative pb-1 ${pathname === path ? 'text-yellow-400' : ''}`;

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Link href={'/'}>
            <Image
              src={'/logo.png'}
              alt="logo"
              loading="eager"
              width={60}
              height={60}
              className="object-cover h-auto w-auto"
            />
          </Link>

          <div>
            <h2>
              <span className="text-xl font-bold">Book</span>
              <span className="text-xl font-medium text-yellow-400">Land</span>
            </h2>
            <h2 className="text-lg font-medium">Book Store Website</h2>
          </div>
        </div>

        <ul className="flex items-center gap-5 text-md font-medium">
          <li className={navLinkStyle('/')}>
            <Link href={'/'}>Home</Link>
            {pathname === '/' && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400"></div>
            )}
          </li>

          <li className={navLinkStyle('/all-books')}>
            <Link href={'/all-books'}>All Books</Link>
            {pathname === '/all-books' && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400"></div>
            )}
          </li>

          <li className={navLinkStyle('/profile')}>
            <Link href={'/profile'}>Profile</Link>
            {pathname === '/profile' && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400"></div>
            )}
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={'/login'}>
                <button className="btn btn-warning">Login</button>
              </Link>
            </li>
            <li>
              <Link href={'/signup'}>
                <button className="btn btn-warning">Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;