import FindTicketByUserEmailService from '@src/application/service/tickets/FindTicketByUserEmailService';
import { Request, Response, NextFunction } from 'express';

export default class FindTicketByUserEmailController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { email } = request.params;
      const result = await FindTicketByUserEmailService.execute(email);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
