import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import morgan from 'morgan';
import { BookRoutes } from './modules/Book/book.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFoundRouteHandler from './middlewares/notFoundRouteHandler';
import { MemberRoutes } from './modules/Member/member.route';

const app: Application = express();

// GLOBAL MIDDLEWARES
app.use(express.json());
app.use(cors());

// DEVELOPMENT LOGGING
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// TEST ROUTE
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello form server',
  });
});

// ROUTES
app.use('/api/books', BookRoutes);
app.use('/api/members', MemberRoutes);

// NOT FOUND ROUTE HANDLER
app.use(notFoundRouteHandler);

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

export default app;
