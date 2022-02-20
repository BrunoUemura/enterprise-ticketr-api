import DefaultResponse from '@src/application/entity/DefaultResponse';
import userRepository from '@src/application/repository/UserRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';
import commentRepository from '@src/application/repository/CommentRepository';
import TokenPayload from '@src/application/entity/TokenPayload';
import BadRequestError from '@src/util/error/BadRequestError';

export default class DeleteCommentService {
  static async execute(
    id: string,
    token: TokenPayload,
  ): Promise<DefaultResponse> {
    const user = await userRepository.findFirst({
      where: {
        id: token.id,
      },
    });

    if (!user) throw new NotFoundError('User not found');

    const comment = await commentRepository.findFirst({
      where: { id },
    });

    if (user.id !== comment.user_id) {
      throw new BadRequestError('You do not have permission');
    }

    await commentRepository.delete({
      where: { id },
    });

    return {
      status: HttpStatusCodes.OK,
      message: 'Comment Deleted Successfully',
    };
  }
}
