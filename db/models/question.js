"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Titles }) {
      this.belongsTo(Titles, { foreignKey: "titleId" });
    }
  }
  Question.init(
    {
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      titleId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Titles",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
