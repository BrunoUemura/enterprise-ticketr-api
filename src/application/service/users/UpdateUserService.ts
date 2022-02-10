import UserDTO from '@src/application/dto/UserDTO';
import DefaultResponseDTO from '@src/application/dto/DefaultResponseDTO';
import userRepository from '@src/application/repository/userRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import BadRequestError from '@src/util/error/BadRequestError';

export default class UpdateUserService {
  static async execute(data: UserDTO): Promise<DefaultResponseDTO> {
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
        role: data.role,
        department: data.department,
        manager: data.manager,
      },
    });

    return {
      status: HttpStatusCodes.OK,
      message: 'User updated successfully',
    };
  }
}
