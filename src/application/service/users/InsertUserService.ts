import BadRequestError from '@src/util/error/BadRequestError';
import User from '@src/application/entity/CreateUser';
import userRepository from '@src/application/repository/UserRepository';
import DefaultResponse from '@src/application/entity/DefaultResponse';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';

export default class InsertUserService {
  static async execute(data: User): Promise<DefaultResponse> {
    const userExist = await userRepository.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExist) throw new BadRequestError('User already registered');

    await userRepository.create({
      data: {
        id: data.id,
        name: data.name,
        email: data.email,
        department_id: data.department_id,
        manager: data.manager,
      },
    });

    return {
      status: HttpStatusCodes.CREATED,
      message: 'User registered successfully',
    };
  }
}
