import DefaultResponseDTO from '@src/application/entity/DefaultResponse';
import CreateTicket from '@src/application/entity/CreateTicket';
import ticketRepository from '@src/application/repository/TicketRepository';
import userRepository from '@src/application/repository/UserRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import { TicketStatus } from '@src/util/enum/TicketStatus';
import NotFoundError from '@src/util/error/NotFoundError';

export default class CreateTicketService {
  static async execute(data: CreateTicket): Promise<DefaultResponseDTO> {
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
        status: TicketStatus.AWAITING_APPROVAL,
      },
    });

    return {
      status: HttpStatusCodes.CREATED,
      message: 'Ticket Created Successfully',
    };
  }
}
