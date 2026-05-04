export default function HowItWorks() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-400">How It Works</h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Your journey to discovering great books is just three simple steps
          away.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-base-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-xl">🔍</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Find Your Book</h3>
            <p className="text-gray-500">
              Search through our vast collection of books across various
              categories to find your next favorite read.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-base-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-xl">📖</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Borrow Digitally</h3>
            <p className="text-gray-500">
              Easily borrow books with a single click. Keep track of your
              borrowed books in your personal profile.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-base-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-100 p-4 rounded-xl">👤</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Enjoy Reading</h3>
            <p className="text-gray-500">
              Dive into the stories, learn new skills, and enjoy the seamless
              reading experience with Book Buddy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
