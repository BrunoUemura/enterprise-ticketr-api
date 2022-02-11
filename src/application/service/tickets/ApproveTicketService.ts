import TicketDTO from '@src/application/dto/TicketDTO';
import TokenPayloadDTO from '@src/application/dto/TokenPayloadDTO';
import ticketRepository from '@src/application/repository/TicketRepository';
import userRepository from '@src/application/repository/userRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import { TicketStatus } from '@src/util/enum/TicketStatus';
import BadRequestError from '@src/util/error/BadRequestError';
import NotFoundError from '@src/util/error/NotFoundError';

export default class ApproveTicketService {
  static async execute(id: string, token: TokenPayloadDTO) {
    const user = await userRepository.findFirst({
      where: { id: token.id },
    });

    if (!user) throw new BadRequestError('User not registered');

    const ticket = await ticketRepository.findFirst({
      where: { id },
    });

    if (!ticket) throw new NotFoundError('Ticket not found');

    if (ticket.approver !== user.email) {
      throw new BadRequestError('User is not an approver');
    }

    await ticketRepository.update({
      where: { id },
      data: {
        approved: true,
        status: TicketStatus.OPEN,
      },
    });

    return {
      status: HttpStatusCodes.OK,
      message: 'Ticket approved Successfully',
    };
  }
}
