import TicketDTO from '@src/application/dto/TicketDTO';
import ticketRepository from '@src/application/repository/TicketRepository';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';

export default class UpdateTicketService {
  static async execute(id: string, data: TicketDTO) {
    const ticket = await ticketRepository.findFirst({
      where: { id },
    });

    if (!ticket) throw new NotFoundError('Ticket not found');

    await ticketRepository.update({
      where: { id },
      data: {
        opened_by: data.opened_by,
        assigned_to: data.assigned_to,
        title: data.title,
        description: data.description,
        from_department: data.from_department,
        to_department: data.to_department,
        approved: data.approved,
        status: data.status,
      },
    });

    return {
      status: HttpStatusCodes.OK,
      message: 'Ticket Updated Successfully',
    };
  }
}
