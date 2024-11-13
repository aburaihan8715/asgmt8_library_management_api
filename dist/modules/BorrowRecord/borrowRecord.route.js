"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRoutes = exports.BorrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const borrowRouter = express_1.default.Router();
const returnRouter = express_1.default.Router();
borrowRouter.post('/', borrowRecord_controller_1.BorrowRecordController.borrowBook);
borrowRouter.get('/overdue', borrowRecord_controller_1.BorrowRecordController.getOverDueBooks);
returnRouter.post('/', borrowRecord_controller_1.BorrowRecordController.returnBook);
exports.BorrowRoutes = borrowRouter;
exports.ReturnRoutes = returnRouter;
