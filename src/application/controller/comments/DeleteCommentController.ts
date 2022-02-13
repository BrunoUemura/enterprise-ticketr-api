import { Request, Response, NextFunction } from 'express';
import DeleteCommentService from '@src/application/service/comments/DeleteCommentService';
import AuthValidation from '@src/validation/AuthValidation';

export default class DeleteCommentController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await AuthValidation.execute(request);
      const token: any = await AuthValidation.retrieveToken(request);

      const { id } = request.params;
      const result = await DeleteCommentService.execute(id, token);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
