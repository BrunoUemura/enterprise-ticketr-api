import BadRequestError from '@src/util/error/BadRequestError';
import UserDTO from '@src/application/dto/UserDTO';

export default class InsertUserService {
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
