import TokenPayloadDTO from '@src/application/dto/TokenPayloadDTO';
import ApproveTicketService from '@src/application/service/tickets/ApproveTicketService';
import AuthValidation from '@src/validation/AuthValidation';
import { Request, Response, NextFunction } from 'express';

export default class ApproveTicketController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await AuthValidation.execute(request);
      const token: any = await AuthValidation.retrieveToken(request);

      const { id } = request.params;

      const result = await ApproveTicketService.execute(id, token);

      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
