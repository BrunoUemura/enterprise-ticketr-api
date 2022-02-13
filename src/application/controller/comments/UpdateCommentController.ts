import { Request, Response, NextFunction } from 'express';
import UpdateCommentService from '@src/application/service/comments/UpdateCommentService';
import AuthValidation from '@src/validation/AuthValidation';

export default class UpdateCommentController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await AuthValidation.execute(request);
      const token: any = await AuthValidation.retrieveToken(request);

      const { id } = request.params;
      const { content } = request.body;
      const result = await UpdateCommentService.execute(id, token, content);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
