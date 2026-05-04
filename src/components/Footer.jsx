import Link from 'next/link';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaLocationDot, FaSquareInstagram } from 'react-icons/fa6';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-yellow-100">
      {/* <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" /> */}

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-15">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
                Book
                <span className="text-xl font-medium text-yellow-400">
                  Land
                </span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              A modern book borrowing platform where readers can easily
              discover, borrow, and enjoy their favorite books anytime.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-600 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-yellow-600 dark:text-white">
              Contact Us
            </h3>
            <h2 className="flex items-center gap-2">
              {' '}
              <MdEmail /> bookland@gmail.com
            </h2>
            <p className="flex items-center gap-2">
              <FaLocationDot /> Bangla Bazar, 1203, Dhaka
            </p>

            <ul className="flex gap-3 text-2xl">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaSquareInstagram />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
            </ul>
          </div>

          {/*Newsletter*/}

          <div>
            <h2 class="text-yellow-600 text-2xl font-semibold mb-4">Newsletter</h2>
            <p class="text-gray-600 mb-8">
              {' '}
              Subscribe to our newsletter for updates <br />
              and offers.
            </p>

            <div class="flex items-center bg-gray-200 rounded-full overflow-hidden max-w-md mx-auto">
              <input
                type="email"
                placeholder=""
                class="flex-1 px-5 py-3 bg-gray-200 outline-none text-black"
              />

              <button class="px-5 py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
