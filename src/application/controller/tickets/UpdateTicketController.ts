import { Request, Response, NextFunction } from 'express';

export default class UpdateTicketController {
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
