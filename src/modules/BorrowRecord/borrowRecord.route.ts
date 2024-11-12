import express from 'express';
import { BorrowRecordController } from './borrowRecord.controller';

const borrowRouter = express.Router();
const returnRouter = express.Router();

borrowRouter.post('/', BorrowRecordController.borrowBook);
borrowRouter.get('/overdue', BorrowRecordController.getOverDueBooks);
returnRouter.post('/', BorrowRecordController.returnBook);

export const BorrowRoutes = borrowRouter;
export const ReturnRoutes = returnRouter;
