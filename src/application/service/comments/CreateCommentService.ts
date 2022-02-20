import DefaultResponseDTO from '@src/application/entity/DefaultResponse';
import CreateComment from '@src/application/entity/CreateComment';
import userRepository from '@src/application/repository/UserRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';
import commentRepository from '@src/application/repository/CommentRepository';
import TokenPayload from '@src/application/entity/TokenPayload';
import BadRequestError from '@src/util/error/BadRequestError';

export default class CreateCommentService {
  static async execute(
    id: string,
    token: TokenPayload,
    data: CreateComment,
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
