
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.contract.create({
    data: {
          clientname: 'Juan testing',
          email: 'jpabon@gmail.com',
          accountNumber: 777,
          amount: 100000,
          currency: 10000,
      },
  });


  console.log({ post1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });