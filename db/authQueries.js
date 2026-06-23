const prisma = require("../lib/prisma.js");

async function getProfile(username) {
    return await prisma.user.findUnique({
        where: {
            username,
        },
    });
}

async function getProfileById(id) {
    return await prisma.user.findUnique({
        where: {
            id,
        },
    });
}

async function registerProfile(email, password, name, username) {
    await prisma.user.create({
        data: {
            email,
            password,
            name,
            username,
        },
    });
}

module.exports = {
    getProfile,
    getProfileById,
    registerProfile,
};
