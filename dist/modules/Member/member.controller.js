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
exports.MemberController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const responseNotFoundData_1 = __importDefault(require("../../utils/responseNotFoundData"));
const member_service_1 = require("./member.service");
// CREATE Member
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newMember = yield member_service_1.MemberService.createMemberIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Member created successfully!',
        data: newMember,
    });
}));
// GET ALL MemberS
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield member_service_1.MemberService.getAllMembersFromDB();
    if (!members || members.length < 1) {
        return (0, responseNotFoundData_1.default)(res, 'No Members found!');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Members retrieved successfully!',
        data: members,
    });
}));
// GET SINGLE Member
const getSingleMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.id;
    const member = yield member_service_1.MemberService.getSingleMemberFromDB(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Member retrieved successfully!',
        data: member,
    });
}));
// UPDATE Member
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.id;
    const data = req.body;
    const updatedMember = yield member_service_1.MemberService.updateMemberIntoDB(memberId, data);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Member updated successfully!',
        data: updatedMember,
    });
}));
// DELETE Member
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberId = req.params.id;
    yield member_service_1.MemberService.deleteMemberFromDB(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_1.default.OK,
        message: 'Member successfully deleted!',
    });
}));
exports.MemberController = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
