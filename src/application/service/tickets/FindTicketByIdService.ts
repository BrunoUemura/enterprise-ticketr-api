import ticketRepository from '@src/application/repository/TicketRepository';

export default class FindTicketByIdService {
  static async execute(id: string) {
    return await ticketRepository.findFirst({
      where: {
        id,
      },
    });
  }
}
