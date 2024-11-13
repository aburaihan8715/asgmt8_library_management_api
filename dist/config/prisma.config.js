"use strict";
// import { PrismaClient } from '@prisma/client';
Object.defineProperty(exports, "__esModule", { value: true });
// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'], // Enable logging
// });
// prisma.$connect().catch((error) => {
//   console.error('Failed to connect to the database:', error);
// });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.default = prisma;
