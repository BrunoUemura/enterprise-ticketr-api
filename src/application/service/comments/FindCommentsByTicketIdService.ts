import commentRepository from '@src/application/repository/CommentRepository';

export default class FindCommentsByTicketIdService {
  static async execute(id: string) {
    return await commentRepository.findFirst({
      where: {
        ticket_id: id,
      },
    });
  }
}
