import ticketRepository from '@src/application/repository/TicketRepository';

export default class FindTicketByUserEmailService {
  static async execute(opened_by: string) {
    return await ticketRepository.findMany({
      where: {
        opened_by,
      },
    });
  }
}
