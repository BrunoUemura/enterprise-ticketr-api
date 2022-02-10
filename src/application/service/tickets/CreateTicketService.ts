import DefaultResponseDTO from '@src/application/dto/DefaultResponseDTO';
import TicketDTO from '@src/application/dto/TicketDTO';
import ticketRepository from '@src/application/repository/TicketRepository';
import userRepository from '@src/application/repository/userRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';

export default class CreateTicketService {
  static async execute(data: TicketDTO): Promise<DefaultResponseDTO> {
    const user = await userRepository.findFirst({
      where: {
        email: data.opened_by,
      },
    });

    if (!user) throw new NotFoundError('User not found');

    await ticketRepository.create({
      data: {
        opened_by: data.opened_by,
        assigned_to: '',
        title: data.title,
        description: data.description,
        from_department: data.from_department,
        to_department: data.to_department,
        approver: user.manager,
      },
    });

    return {
      status: HttpStatusCodes.CREATED,
      message: 'Ticket Created Successfully',
    };
  }
}
