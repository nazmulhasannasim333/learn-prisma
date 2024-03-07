import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  // single update
  // const singleUpdate = await prisma.post.update({
  //     where: {
  //         id: 7
  //     },
  //     data: {
  //         title: "Title 5",
  //         // content: "Content 4",
  //         // authorName: "Author 4"
  //     }
  // });

  // update many
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "This is title 4!",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(updateMany);

  // upsertData
  const upsertData = await prisma.post.upsert({
    where: {
      id: 9,
    },
    update: {
      authorName: "Md Nasim Hosen",
    },
    create: {
      title: "Title 66",
      content: "content 66",
    },
  });

  console.log(upsertData);
};

updates();
