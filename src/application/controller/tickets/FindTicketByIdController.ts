import FindTicketByIdService from '@src/application/service/tickets/FindTicketByIdService';
import { Request, Response, NextFunction } from 'express';

export default class FindTicketByIdController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params;
      const result = await FindTicketByIdService.execute(id);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
