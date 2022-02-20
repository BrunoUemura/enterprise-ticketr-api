import AssignTicketService from '@src/application/service/tickets/AssignTicketService';
import AuthValidation from '@src/validation/AuthValidation';
import { Request, Response, NextFunction } from 'express';

export default class AssignTicketController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await AuthValidation.execute(request);
      const token: any = await AuthValidation.retrieveToken(request);

      const { id } = request.params;
      const { assign_to } = request.body;

      const result = await AssignTicketService.execute(id, token, assign_to);

      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
