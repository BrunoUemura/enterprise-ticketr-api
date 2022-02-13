import CreateTicketService from '@src/application/service/tickets/CreateTicketService';
import AuthValidation from '@src/validation/AuthValidation';
import { Request, Response, NextFunction } from 'express';

export default class CreateTicketController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await AuthValidation.execute(request);

      const { opened_by, title, description, from_department, to_department } =
        request.body;

      const result = await CreateTicketService.execute({
        opened_by,
        title,
        description,
        from_department,
        to_department,
      });

      return response.json(result);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
