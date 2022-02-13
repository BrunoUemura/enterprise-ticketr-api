import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const commentRepository = prisma.comment;

export default commentRepository;
