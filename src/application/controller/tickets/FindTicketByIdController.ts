import { Request, Response, NextFunction } from 'express';

export default class FindTicketByIdController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
    } catch (err) {
      next(err);
    }
  }
}
