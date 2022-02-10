import CreateTicketService from '@src/application/service/tickets/CreateTicketService';
import { Request, Response, NextFunction } from 'express';

export default class CreateTicketController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const {
        opened_by,
        title,
        description,
        from_department,
        to_department,
        approved,
        status,
      } = request.body;

      const result = await CreateTicketService.execute({
        opened_by,
        title,
        description,
        from_department,
        to_department,
        approved,
        status,
      });

      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
