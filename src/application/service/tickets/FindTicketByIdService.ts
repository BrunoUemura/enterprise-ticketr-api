import Ticket from '@src/application/entity/Ticket';
import ticketRepository from '@src/application/repository/TicketRepository';

export default class FindTicketByIdService {
  static async execute(id: string): Promise<Ticket> {
    return await ticketRepository.findFirst({
      where: {
        id,
      },
    });
  }
}
