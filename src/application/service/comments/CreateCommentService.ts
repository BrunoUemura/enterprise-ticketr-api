import DefaultResponseDTO from '@src/application/dto/DefaultResponseDTO';
import CommentDTO from '@src/application/dto/CommentDTO';
import userRepository from '@src/application/repository/userRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';
import commentRepository from '@src/application/repository/CommentRepository';
import TokenPayloadDTO from '@src/application/dto/TokenPayloadDTO';
import BadRequestError from '@src/util/error/BadRequestError';

export default class CreateCommentService {
  static async execute(
    id: string,
    token: TokenPayloadDTO,
    data: CommentDTO,
  ): Promise<DefaultResponseDTO> {
    const user = await userRepository.findFirst({
      where: {
        id: data.user_id,
      },
    });

    if (!user) throw new NotFoundError('User not found');

    if (user.id !== token.id)
      throw new BadRequestError('You do not have permission');

    await commentRepository.create({
      data: {
        ticket_id: id,
        user_id: data.user_id,
        content: data.content,
      },
    });

    return {
      status: HttpStatusCodes.CREATED,
      message: 'Comment Created Successfully',
    };
  }
}
