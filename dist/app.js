"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const book_route_1 = require("./modules/Book/book.route");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const notFoundRouteHandler_1 = __importDefault(require("./middlewares/notFoundRouteHandler"));
const member_route_1 = require("./modules/Member/member.route");
const borrowRecord_route_1 = require("./modules/BorrowRecord/borrowRecord.route");
const app = (0, express_1.default)();
// GLOBAL MIDDLEWARES
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// DEVELOPMENT LOGGING
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
// TEST ROUTE
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello form server',
    });
});
// ROUTES
app.use('/api/books', book_route_1.BookRoutes);
app.use('/api/members', member_route_1.MemberRoutes);
app.use('/api/borrow', borrowRecord_route_1.BorrowRoutes);
app.use('/api/return', borrowRecord_route_1.ReturnRoutes);
// NOT FOUND ROUTE HANDLER
app.use(notFoundRouteHandler_1.default);
// GLOBAL ERROR HANDLER
app.use(globalErrorHandler_1.default);
exports.default = app;
