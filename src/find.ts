import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all posts
  const getAllPostFromDB = await prisma.post.findMany({});

  // find first or throw error
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  //   unique find or throw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 11,
    },
    select: {
      title: true,
    },
  });
  console.log({ findUnique });
};

main();
