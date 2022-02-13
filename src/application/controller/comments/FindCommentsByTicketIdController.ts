import { Request, Response, NextFunction } from 'express';
import FindCommentsByTicketIdService from '@src/application/service/comments/FindCommentsByTicketIdService';

export default class FindCommentsByTicketIdController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = request.params;
      const result = await FindCommentsByTicketIdService.execute(id);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
