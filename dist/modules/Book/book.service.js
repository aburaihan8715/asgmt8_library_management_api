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
exports.BookService = void 0;
const prisma_config_1 = __importDefault(require("../../config/prisma.config"));
// CREATE BOOK
const createBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.book.create({
        data: payload,
    });
    return result;
});
// GET ALL BOOKS
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.book.findMany();
    return result;
});
// GET SINGLE BOOK
const getSingleBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    return result;
});
// UPDATE BOOK
const updateBookIntoDB = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_config_1.default.book.findFirstOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_config_1.default.book.update({
        where: { bookId },
        data: payload,
    });
    return result;
});
// DELETE BOOK
const deleteBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_config_1.default.book.findFirstOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_config_1.default.book.delete({
        where: { bookId },
    });
    return result;
});
exports.BookService = {
    createBookIntoDB,
    getAllBooksFromDB,
    getSingleBookFromDB,
    updateBookIntoDB,
    deleteBookFromDB,
};
