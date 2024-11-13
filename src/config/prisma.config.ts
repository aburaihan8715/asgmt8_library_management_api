import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

/*
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl: string =
  process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL_CLOUD || ''
    : process.env.DATABASE_URL || '';

if (!databaseUrl) {
  throw new Error(
    'Database URL is not defined. Please check your .env file.'
  );
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

export default prisma;
*/
