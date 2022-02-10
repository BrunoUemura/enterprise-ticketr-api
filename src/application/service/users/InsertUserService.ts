import BadRequestError from '@src/util/error/BadRequestError';
import UserDTO from '@src/application/dto/UserDTO';
import userRepository from '@src/application/repository/userRepository';
import DefaultResponseDTO from '@src/application/dto/DefaultResponseDTO';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';

export default class InsertUserService {
  static async execute(data: UserDTO): Promise<DefaultResponseDTO> {
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
        role: data.role,
        department: data.department,
        manager: data.manager,
      },
    });

    return {
      status: HttpStatusCodes.CREATED,
      message: 'User registered successfully',
    };
  }
}
