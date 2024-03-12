import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  const result = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      post: true,
    },
  });

  // relational fillters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: false,
        },
      },
    },
  });
  //   console.log(result);
  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
