import UpdateTicketService from '@src/application/service/tickets/UpdateTicketService';
import { Request, Response, NextFunction } from 'express';

export default class UpdateTicketController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params;
      const { user_id, title, description, from, to, approved, status } =
        request.body;

      const result = await UpdateTicketService.execute(id, {
        user_id,
        title,
        description,
        from,
        to,
        approved,
        status,
      });

      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
