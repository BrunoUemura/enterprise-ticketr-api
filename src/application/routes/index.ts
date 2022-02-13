import { NextFunction, Request, Response, Router } from 'express';

import ticket from '@src/application/routes/ticket.routes';
import comment from '@src/application/routes/comment.routes';
import NotFoundError from '@src/util/error/NotFoundError';

const routes = Router();

routes.use('/api/v1/ticket', ticket);
routes.use('/api/v1/comment', comment);

routes.use((req: Request, _res: Response, next: NextFunction) => {
  if (!req.route) {
    return next(new NotFoundError('Route not found'));
  }
  next();
});

export default routes;
