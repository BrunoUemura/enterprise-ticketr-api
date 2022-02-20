import TokenPayload from '@src/application/entity/TokenPayload';
import departmentRepository from '@src/application/repository/DepartmentRepository';
import ticketRepository from '@src/application/repository/TicketRepository';
import userRepository from '@src/application/repository/UserRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import { TicketStatus } from '@src/util/enum/TicketStatus';
import BadRequestError from '@src/util/error/BadRequestError';
import NotFoundError from '@src/util/error/NotFoundError';

export default class AssignTicketService {
  static async execute(id: string, token: TokenPayload, assignee: string) {
    const user = await userRepository.findFirst({
      where: { id: token.id },
    });

    if (!user) throw new BadRequestError('User not registered');

    const ticket = await ticketRepository.findFirst({
      where: { id },
    });

    if (!ticket) throw new NotFoundError('Ticket not found');

    if (ticket.to_department !== user.department_id) {
      throw new BadRequestError('You do not have permission to assign');
    }

    await ticketRepository.update({
      where: { id },
      data: {
        assigned_to: assignee,
        status: TicketStatus.IN_PROGRESS,
      },
    });

    return {
      status: HttpStatusCodes.OK,
      message: 'Ticket Assigned Successfully',
    };
  }
}
