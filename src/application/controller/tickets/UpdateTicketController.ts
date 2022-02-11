import UpdateTicketService from '@src/application/service/tickets/UpdateTicketService';
import AuthValidation from '@src/validation/AuthValidation';
import { Request, Response, NextFunction } from 'express';

export default class UpdateTicketController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await AuthValidation.execute(request);

      const { id } = request.params;
      const {
        opened_by,
        assigned_to,
        title,
        description,
        from_department,
        to_department,
        approved,
        status,
      } = request.body;

      const result = await UpdateTicketService.execute(id, {
        opened_by,
        assigned_to,
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
