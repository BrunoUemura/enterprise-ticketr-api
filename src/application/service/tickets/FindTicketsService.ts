import Ticket from '@src/application/entity/Ticket';
import ticketRepository from '@src/application/repository/TicketRepository';

export default class FindTicketsService {
  static async execute(): Promise<Ticket[]> {
    return await ticketRepository.findMany();
  }
}
