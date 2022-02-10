import ticketRepository from '@src/application/repository/TicketRepository';

export default class FindTicketsService {
  static async execute() {
    return await ticketRepository.findMany();
  }
}
