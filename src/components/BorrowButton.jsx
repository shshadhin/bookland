'use client';

import { Button } from '@heroui/react';
import { toast } from 'react-toastify';

const BorrowButton = () => {
  const handleBorrow = () => {
    toast.success('Book borrowed successfully!');
  };

  return (
    <Button
      onClick={handleBorrow}
      className="bg-yellow-500 hover:bg-orange-500 text-white px-10 py-7 rounded-2xl text-xl font-bold shadow-lg"
    >
      BORROW THIS BOOK
    </Button>
  );
};

export default BorrowButton;
