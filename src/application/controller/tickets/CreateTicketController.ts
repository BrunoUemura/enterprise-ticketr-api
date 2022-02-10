import { Request, Response, NextFunction } from 'express';

export default class CreateTicketController {
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
