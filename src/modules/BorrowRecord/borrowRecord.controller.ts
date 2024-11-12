import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BorrowRecordService } from './borrowRecord.service';
import responseNotFoundData from '../../utils/responseNotFoundData';

// BORROW BOOK
const borrowBook = catchAsync(async (req, res) => {
  // const borrowDate = new Date();
  // const returnDate = new Date(borrowDate);
  // returnDate.setDate(returnDate.getDate() + 14);

  const result = await BorrowRecordService.borrowBook({
    ...req.body,
  });

  const { returnDate: _, ...newBorrowRecord } = result;

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book borrowed successfully!',
    data: newBorrowRecord,
  });
});

// RETURN BOOK
const returnBook = catchAsync(async (req, res) => {
  const borrowId = req.body.borrowId;
  await BorrowRecordService.returnBook(borrowId);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book returned successfully!',
  });
});

// GET OVER DUE BOOKS
const getOverDueBooks = catchAsync(async (req, res) => {
  const overdueBooks = await BorrowRecordService.getOverDueBooksFromDB();

  if (!overdueBooks || overdueBooks.length < 1) {
    return responseNotFoundData(res, 'No overdue books!');
  }

  const date = new Date();

  const overdueBooksList = overdueBooks.map((record) => {
    const overdueDays =
      Math.floor(
        (date.getTime() - new Date(record.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14;

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Overdue borrow list fetched',
    data: overdueBooksList,
  });
});

export const BorrowRecordController = {
  returnBook,
  borrowBook,
  getOverDueBooks,
};
