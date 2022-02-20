import DefaultResponse from '@src/application/entity/DefaultResponse';
import userRepository from '@src/application/repository/UserRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';
import commentRepository from '@src/application/repository/CommentRepository';
import TokenPayload from '@src/application/entity/TokenPayload';

export default class UpdateCommentService {
  static async execute(
    id: string,
    token: TokenPayload,
    content: string,
  ): Promise<DefaultResponse> {
    const user = await userRepository.findFirst({
      where: {
        id: token.id,
      },
    });

    if (!user) throw new NotFoundError('User not found');

    await commentRepository.update({
      where: { id },
      data: {
        content: content,
      },
    });

    return {
      status: HttpStatusCodes.OK,
      message: 'Comment Updated Successfully',
    };
  }
}
