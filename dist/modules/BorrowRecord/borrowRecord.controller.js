"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const borrowRecord_service_1 = require("./borrowRecord.service");
const responseNotFoundData_1 = __importDefault(require("../../utils/responseNotFoundData"));
// BORROW BOOK
const borrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const borrowDate = new Date();
    // const returnDate = new Date(borrowDate);
    // returnDate.setDate(returnDate.getDate() + 14);
    const result = yield borrowRecord_service_1.BorrowRecordService.borrowBook(Object.assign({}, req.body));
    const { returnDate: _ } = result, newBorrowRecord = __rest(result, ["returnDate"]);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Book borrowed successfully!',
        data: newBorrowRecord,
    });
}));
// RETURN BOOK
const returnBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowId = req.body.borrowId;
    yield borrowRecord_service_1.BorrowRecordService.returnBook(borrowId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Book returned successfully!',
    });
}));
// GET OVER DUE BOOKS
const getOverDueBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBooks = yield borrowRecord_service_1.BorrowRecordService.getOverDueBooksFromDB();
    if (!overdueBooks || overdueBooks.length < 1) {
        return (0, responseNotFoundData_1.default)(res, 'No overdue books!');
    }
    const date = new Date();
    const overdueBooksList = overdueBooks.map((record) => {
        const overdueDays = Math.floor((date.getTime() - new Date(record.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays,
        };
    });
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Overdue borrow list fetched',
        data: overdueBooksList,
    });
}));
exports.BorrowRecordController = {
    returnBook,
    borrowBook,
    getOverDueBooks,
};
