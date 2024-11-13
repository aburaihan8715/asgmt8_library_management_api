"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const responseNotFoundData = (res, message) => {
    res.status(http_status_1.default.OK).json({
        success: true,
        status: http_status_1.default.OK,
        message: message || 'No Data Found',
        data: [],
    });
};
exports.default = responseNotFoundData;
