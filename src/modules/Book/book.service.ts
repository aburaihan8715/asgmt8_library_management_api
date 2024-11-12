import { Book } from '@prisma/client';
import prisma from '../../config/prisma.config';

// CREATE BOOK
const createBookIntoDB = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

// GET ALL BOOKS
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();

  return result;
};

// GET SINGLE BOOK
const getSingleBookFromDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  return result;
};

// UPDATE BOOK
const updateBookIntoDB = async (
  bookId: string,
  payload: Partial<Book>
) => {
  await prisma.book.findFirstOrThrow({
    where: {
      bookId,
    },
  });

  const result = await prisma.book.update({
    where: { bookId },
    data: payload,
  });

  return result;
};

// DELETE BOOK
const deleteBookFromDB = async (bookId: string) => {
  await prisma.book.findFirstOrThrow({
    where: {
      bookId,
    },
  });

  const result = await prisma.book.delete({
    where: { bookId },
  });

  return result;
};

export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
