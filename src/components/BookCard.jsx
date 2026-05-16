
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
  
  console.log(book);
  return (
    <Card className="border border-yellow-200 shadow-md">
      <div className="w-full h-[300px] relative overflow-hidden rounded-lg">
        <Image
          src={book.image_url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          alt={book.title}
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-yellow-600">{book.title}</h2>
        <p className="text-lg font-medium text-gray-500">{book.author}</p>
      </div>
      <Chip size="sm" color="danger" className="absolute right-6 top-6">
        {book.category}
      </Chip>
      <Link href={`/all-books/${book.id}`}>
        <Button className="w-full bg-yellow-500">View Details</Button>
      </Link>
      
    </Card>
  );
};

export default BookCard;
