'use client';

import { useMemo, useState } from 'react';
import BookCard from './BookCard';
import { BookOpen, Search } from 'lucide-react';

const categories = ['All', 'Science', 'Tech', 'Story'];

const BooksContainer = ({ books }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      // category filter
      const matchCategory =
        selectedCategory === 'All'
          ? true
          : book.category
              ?.toLowerCase()
              .includes(selectedCategory.toLowerCase());

      // search filter
      const matchSearch = book.title
        ?.toLowerCase()
        .includes(searchText.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [books, selectedCategory, searchText]);

  return (
    <div>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search for your favorite books..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="w-full border border-gray-200 rounded-full py-4 pl-12 pr-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
        {/* Sidebar */}
        <div className="bg-base-100 shadow-md rounded-2xl h-fit overflow-hidden">
          <div className="bg-purple-100 px-5 py-4 border-b">
            <h2 className="font-bold text-xl flex items-center gap-2 text-yellow-600">
              <BookOpen size={22} />
              Categories
            </h2>
          </div>

          <div className="p-3 space-y-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium
                   ${
                     selectedCategory === category
                       ? 'bg-purple-100 text-yellow-500'
                       : 'hover:bg-gray-100'
                   }`}
              >
                {category === 'All' ? 'All Books' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Books */}
        <div className="lg:col-span-3">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-3">No Books Found</h2>
              <p className="text-gray-500">Try searching with another name.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksContainer;
