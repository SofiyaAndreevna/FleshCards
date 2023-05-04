"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const titles = [
      {
        title: "Санкт-Петербург",
      },
      {
        title: "Фильмы и Мультфильмы",
      },
      {
        title: "JavaScript",
      },
    ];
    const tit = titles.map((title) => ({
      ...title,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Titles", tit);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Titles");
  },
};
