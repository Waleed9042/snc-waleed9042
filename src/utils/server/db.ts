import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPersonFromDB(name: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        name: name,
      },
    });
    return user;
  } catch (error) {
    console.error(
      "Error occurred while fetching user from the database:",
      error,
    );
    throw new Error("Failed to fetch user from the database.");
  } finally {
    await prisma.$disconnect();
  }
}
