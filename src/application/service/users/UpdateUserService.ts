import UserDTO from '@src/application/dto/UserDTO';
import BadRequestError from '@src/util/error/BadRequestError';

export default class UpdateUserService {
  static async execute(data: UserDTO) {
    if (userExist) {
      throw new BadRequestError('User already registered');
    }

    await this.userRepository.insert(id, username, email);

    return {
      status: 201,
      message: 'User registered successfully',
    };
  }
}
