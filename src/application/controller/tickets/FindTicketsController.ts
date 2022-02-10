import FindTicketsService from '@src/application/service/tickets/FindTicketsService';
import { Request, Response, NextFunction } from 'express';

export default class FindTicketsController {
  static async handle(
    _request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const result = await FindTicketsService.execute();
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
