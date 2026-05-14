import BorrowButton from '@/components/BorrowButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
  

  const { id } = await params;
  const res = await fetch('https://book-land-fawn.vercel.app/data.json');
  const books = await res.json();
  const book = books.find(b => b.id == id);
  console.log(book);
  return (
    <div className="min-h-screen bg-[#f8f4d9] py-10 px-4">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto ">
        <Link href={'/all-books'}>
          <button className="flex items-center gap-2 bg-yellow-200 px-5 py-2 rounded-full shadow text-black font-medium mb-8">
            ← Back to all books
          </button>
        </Link>
      </div>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-[#f7f5f1] rounded-[30px] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Left Image */}
        <div className="w-full md:w-[320px] shrink-0">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={book.image_url}
              fill
              className="object-cover"
              alt={book.title}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Top Tags */}
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1 rounded-lg">
                {book.category}
              </span>

              <span className="bg-green-100 text-green-600 text-sm font-semibold px-4 py-1 rounded-lg">
                {book.available_quantity} Copies Available
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              {book.title}
            </h1>

            {/* Author */}
            <p className="mt-3 text-2xl text-gray-500">
              by{' '}
              <span className="text-indigo-600 font-semibold">
                {book.author}
              </span>
            </p>

            {/* Description */}
            <p className="mt-10 text-gray-600 text-lg leading-9 max-w-2xl">
              {book.description}
            </p>
          </div>

          {/* Button */}
          <div className="mt-12">
            <BorrowButton></BorrowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
