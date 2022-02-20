import CreateUser from '@src/application/entity/CreateUser';
import InsertUserService from '@src/application/service/users/InsertUserService';
import UpdateUserService from '@src/application/service/users/UpdateUserService';

export default class RabbitmqController {
  static async handleEvent(message: CreateUser) {
    const user = {
      id: message.id,
      name: message.name,
      email: message.email,
      department_id: message.department_id,
      manager: message.manager,
    };

    switch (message.type) {
      case 'UserCreation':
        await InsertUserService.execute(user);
        break;

      case 'UserUpdate':
        await UpdateUserService.execute(user);
        break;

      default:
        console.log(`No action on event`);
        break;
    }
  }
}
