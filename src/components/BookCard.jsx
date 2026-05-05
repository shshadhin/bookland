import Image from 'next/image';
import React from 'react';

const BookCard = ({ book }) => {
  console.log(book)
  return (
    <div>
      <Image
        src={book.image_url}
        height={200}
        width={200}
        alt={book.title}
      
      ></Image>
      <h2>{book.title}</h2>
    </div>
  );
};

export default BookCard;