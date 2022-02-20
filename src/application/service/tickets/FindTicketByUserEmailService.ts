import Ticket from '@src/application/entity/Ticket';
import ticketRepository from '@src/application/repository/TicketRepository';

export default class FindTicketByUserEmailService {
  static async execute(opened_by: string): Promise<Ticket[]> {
    return await ticketRepository.findMany({
      where: {
        opened_by,
      },
    });
  }
}
