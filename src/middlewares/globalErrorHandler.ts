/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = httpStatus.INTERNAL_SERVER_ERROR;
  const success = false;
  let message = err.message || 'Something went wrong!';
  let error = err;

  if (err instanceof Prisma.PrismaClientValidationError) {
    message = 'Validation Error';
    error = err.message;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      message = 'Duplicate Key error';
      error = err.meta;
    }
  }

  res.status(status).json({
    success,
    status,
    message,
    error,
  });
};

export default globalErrorHandler;
