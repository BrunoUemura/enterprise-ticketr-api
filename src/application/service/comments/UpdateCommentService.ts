import DefaultResponseDTO from '@src/application/dto/DefaultResponseDTO';
import CommentDTO from '@src/application/dto/CommentDTO';
import userRepository from '@src/application/repository/userRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';
import commentRepository from '@src/application/repository/CommentRepository';
import TokenPayloadDTO from '@src/application/dto/TokenPayloadDTO';

export default class UpdateCommentService {
  static async execute(
    id: string,
    token: TokenPayloadDTO,
    content: string,
  ): Promise<DefaultResponseDTO> {
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
