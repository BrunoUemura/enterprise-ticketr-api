import { PrismaClient } from '@prisma/client';
import { users } from './seeders/users';
import { departments } from './seeders/departments';

const prisma = new PrismaClient();

async function main() {
  await prisma.department.createMany({
    data: departments,
  });

  await prisma.user.createMany({
    data: users,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
