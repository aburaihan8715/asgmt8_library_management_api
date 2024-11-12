import { BorrowRecord } from '@prisma/client';
import prisma from '../../config/prisma.config';

// BORROW BOOK
const borrowBook = async (payload: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data: payload,
  });

  const returnDate = new Date(result.borrowDate);
  returnDate.setDate(returnDate.getDate() + 14);

  return {
    ...result,
    returnDate,
  };
};

// RETURN BOOK
const returnBook = async (borrowId: string) => {
  const result = await prisma.borrowRecord.findUniqueOrThrow({
    where: { borrowId },
  });

  return result;
};

// OVER DUE BOOKS
const getOverDueBooksFromDB = async () => {
  const date = new Date();
  const overdueRecords = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: new Date(date.getTime() - 14 * 24 * 60 * 60 * 1000),
      },
    },
    include: {
      book: true,
      member: true,
    },
  });

  return overdueRecords;
};

export const BorrowRecordService = {
  borrowBook,
  returnBook,
  getOverDueBooksFromDB,
};
