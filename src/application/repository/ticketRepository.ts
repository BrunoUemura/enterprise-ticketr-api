import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const ticketRepository = prisma.ticket;

export default ticketRepository;
