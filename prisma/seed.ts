import { PrismaClient } from "@prisma/client";
import { mockUsers } from "@/utils/server/mock-users";
import { IPerson } from "@/types/person";
import { Person } from "@/utils/common/person";

const prisma = new PrismaClient();

async function main() {
  // TODO: Add mock users
  // await prisma.user.create({
  // data: mockUsers[Person.PersonA] as unknown as IPerson,
  // });
  // await prisma.user.create({
  //   data: mockUsers[Person.PersonB] as unknown as IPerson,
  // });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
