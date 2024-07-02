import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a new user
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "test@example.com",
  //     name: "Test User",
  //   },
  // });
  // console.log("Created User:", newUser);

  // Fetch all users
  const allUsers = await prisma.user.findMany();
  console.log("All Users:", allUsers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
