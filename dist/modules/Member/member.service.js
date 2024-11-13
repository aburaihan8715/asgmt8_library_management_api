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
exports.MemberService = void 0;
const prisma_config_1 = __importDefault(require("../../config/prisma.config"));
// CREATE Member
const createMemberIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.member.create({
        data: payload,
    });
    return result;
});
// GET ALL MemberS
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.member.findMany();
    return result;
});
// GET SINGLE Member
const getSingleMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_config_1.default.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    return result;
});
// UPDATE Member
const updateMemberIntoDB = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_config_1.default.member.findFirstOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma_config_1.default.member.update({
        where: { memberId },
        data: payload,
    });
    return result;
});
// DELETE Member
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_config_1.default.member.findFirstOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma_config_1.default.member.delete({
        where: { memberId },
    });
    return result;
});
exports.MemberService = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getSingleMemberFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
};
