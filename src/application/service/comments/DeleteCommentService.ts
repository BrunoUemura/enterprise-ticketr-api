import DefaultResponseDTO from '@src/application/dto/DefaultResponseDTO';
import userRepository from '@src/application/repository/userRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';
import commentRepository from '@src/application/repository/CommentRepository';
import TokenPayloadDTO from '@src/application/dto/TokenPayloadDTO';
import BadRequestError from '@src/util/error/BadRequestError';

export default class DeleteCommentService {
  static async execute(
    id: string,
    token: TokenPayloadDTO,
  ): Promise<DefaultResponseDTO> {
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
