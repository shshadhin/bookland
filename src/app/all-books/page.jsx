
import BookCard from '@/components/BookCard';

const AllBooksPage = async () => {
  const res = await fetch('https://book-land-fawn.vercel.app/data.json');
  const books = await res.json();
  console.log(books);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-base-content tracking-tight leading-tight max-w-4xl mx-auto mb-2 mt-5 text-center">
        Find Your Next <span className="text-yellow-400">Great Read</span>
      </h1>

      <p className="text-lg md:text-xl text-base-content/40 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
        Discover thousands of books through our community of readers. Borrow,
        rent, or exchange books with fellow book lovers near you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-5">
        
        {books.map(book => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
