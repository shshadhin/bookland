import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch('https://book-land-fawn.vercel.app/data.json');
  const books = await res.json();
  const topBooks = books.slice(0, 4)
  // console.log(topBooks)
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-600 bg-clip-text text-transparent">
        ✨ Featured Books
      </h2>
      <p className="text-center text-md text-gray-400 my-3 px-4">
        Featured Books are a curated selection of standout titles chosen for
        their popularity, quality, and reader interest.
      </p>

      <div>
        {
          topBooks.map(book => <BookCard key={book.id} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedBooks;