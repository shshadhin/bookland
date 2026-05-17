

'use client';

import { Button, Card, Chip } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'animate.css';

const BookCard = ({ book }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const router = useRouter();

  const handleViewDetails = () => {
    if (!user) {
      toast.error('Please login first');

      router.push('/login');

      return;
    }

    router.push(`/all-books/${book.id}`);
  };

  return (
    <Card className="border border-yellow-200 shadow-md animate__animated animate__fadeInUp hover:scale-105 transition-transform duration-300">
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

      <Button onClick={handleViewDetails} className="w-full bg-yellow-500">
        View Details
      </Button>
    </Card>
  );
};

export default BookCard;