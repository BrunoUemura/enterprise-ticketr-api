import { Request, Response, NextFunction } from 'express';
import CreateCommentService from '@src/application/service/comments/CreateCommentService';
import AuthValidation from '@src/validation/AuthValidation';

export default class CreateCommentController {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      await AuthValidation.execute(request);
      const token: any = await AuthValidation.retrieveToken(request);

      const { id } = request.params;
      const { user_id, content } = request.body;
      const result = await CreateCommentService.execute(id, token, {
        user_id,
        content,
      });
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
