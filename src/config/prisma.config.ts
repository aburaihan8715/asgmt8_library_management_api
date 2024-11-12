// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'], // Enable logging
// });

// prisma.$connect().catch((error) => {
//   console.error('Failed to connect to the database:', error);
// });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
