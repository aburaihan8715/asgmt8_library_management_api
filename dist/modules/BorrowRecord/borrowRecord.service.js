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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordService = void 0;
const prisma_config_1 = __importDefault(require("../../config/prisma.config"));
// BORROW BOOK
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.borrowRecord.create({
        data: payload,
    });
    const returnDate = new Date(result.borrowDate);
    returnDate.setDate(returnDate.getDate() + 14);
    return Object.assign(Object.assign({}, result), { returnDate });
});
// RETURN BOOK
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.borrowRecord.findUniqueOrThrow({
        where: { borrowId },
    });
    return result;
});
// OVER DUE BOOKS
const getOverDueBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date();
    const overdueRecords = yield prisma_config_1.default.borrowRecord.findMany({
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
});
exports.BorrowRecordService = {
    borrowBook,
    returnBook,
    getOverDueBooksFromDB,
};
