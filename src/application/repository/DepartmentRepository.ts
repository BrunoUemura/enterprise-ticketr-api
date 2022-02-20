import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const departmentRepository = prisma.department;

export default departmentRepository;
