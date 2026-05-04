export default function Review() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-400">
          What Our Readers Say
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card */}
          {[
            {
              name: 'John Doe',
              role: 'Student & Tench  Enthusiast',
              text: 'The collection of tech books here is amazing. As a developer, I found this library very helpful for my learning journey.',
              initial: 'A',
            },
            {
              name: 'Sarah Jenkins',
              role: 'CONTENT STRATEGIST',
              text: 'Fantastic! Borrowing books digitally has never been this smooth. Love the beautiful dark theme and quick checkouts.',
              initial: 'S',
            },
            {
              name: 'Robert Fox',
              role: 'COMPUTER SCIENCE STUDENT',
              text: 'Bookland helped me find all my academic resources in one place. The filtering system is a huge time-saver for students.',
              initial: 'R',
            },
            {
              name: 'Nora Adams',
              role: 'TECHNICAL WRITER',
              text: "The platform's performance is top-notch. Adding and managing book collections feels very intuitive and professional.",
              initial: 'N',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-yellow-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {'★★★★★'.split('').map((star, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 italic text-sm leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
