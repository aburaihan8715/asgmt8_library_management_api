import { Response } from 'express';
import httpStatus from 'http-status';

const responseNotFoundData = (res: Response, message?: string) => {
  res.status(httpStatus.OK).json({
    success: true,
    status: httpStatus.OK,
    message: message || 'No Data Found',
    data: [],
  });
};

export default responseNotFoundData;
