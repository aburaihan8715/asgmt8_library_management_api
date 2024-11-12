import { BookService } from './book.service';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import responseNotFoundData from '../../utils/responseNotFoundData';

// CREATE BOOK
const createBook = catchAsync(async (req, res) => {
  const newBook = await BookService.createBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book created successfully!',
    data: newBook,
  });
});

// GET ALL BOOKS
const getAllBooks = catchAsync(async (req, res) => {
  const books = await BookService.getAllBooksFromDB();

  if (!books || books.length < 1) {
    return responseNotFoundData(res, 'No books found!');
  }

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Books retrieved successfully!',
    data: books,
  });
});

// GET SINGLE BOOK
const getSingleBook = catchAsync(async (req, res) => {
  const bookId = req.params.id;

  const book = await BookService.getSingleBookFromDB(bookId);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book retrieved successfully!',
    data: book,
  });
});

// UPDATE BOOK
const updateBook = catchAsync(async (req, res) => {
  const bookId = req.params.id;
  const data = req.body;

  const updatedBook = await BookService.updateBookIntoDB(bookId, data);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book updated successfully!',
    data: updatedBook,
  });
});

// DELETE BOOK
const deleteBook = catchAsync(async (req, res) => {
  const bookId = req.params.id;

  await BookService.deleteBookFromDB(bookId);
  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book successfully deleted!',
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
