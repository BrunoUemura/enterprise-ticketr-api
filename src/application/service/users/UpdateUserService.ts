import CreateUser from '@src/application/entity/CreateUser';
import DefaultResponse from '@src/application/entity/DefaultResponse';
import userRepository from '@src/application/repository/UserRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import BadRequestError from '@src/util/error/BadRequestError';

export default class UpdateUserService {
  static async execute(data: CreateUser): Promise<DefaultResponse> {
    const userExist = await userRepository.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!userExist) throw new BadRequestError('User not registered');

    await userRepository.update({
      where: { id: data.id },
      data: {
        name: data.name,
        department_id: data.department_id,
        manager: data.manager,
      },
    });

    return {
      status: HttpStatusCodes.OK,
      message: 'User updated successfully',
    };
  }
}
