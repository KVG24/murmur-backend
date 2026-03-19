const prisma = require("../lib/prisma.js");

async function seed() {
    const testUser = await prisma.user.create({
        data: {
            email: "test@email.com",
            username: "testUser123",
            password: "password",
            posts: {
                create: {
                    content: "Hello World. Testing db...",
                },
            },
        },
        include: {
            posts: true,
        },
    });

    console.log("DB seeded successfully: ", testUser);
}

seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
