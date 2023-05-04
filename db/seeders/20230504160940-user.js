"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const users = [
      {
        name: "Софья",
        password: 12345,
        score: 200,
      },
      {
        name: "Денис",
        password: 1234,
        score: 170,
      },
      {
        name: "Сева",
        password: 123,
        score: 150,
      },
    ];
    const user = users.map((use) => ({
      ...use,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Users", user);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users");
  },
};
