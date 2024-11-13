"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, _next) => {
    const status = http_status_1.default.INTERNAL_SERVER_ERROR;
    const success = false;
    let message = err.message || 'Something went wrong!';
    let error = err;
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = 'Duplicate Key error';
            error = err.meta;
        }
    }
    res.status(status).json({
        success,
        status,
        message,
    });
};
exports.default = globalErrorHandler;
