"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Titles extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: "titleId" });
    }
  }
  Titles.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Titles",
    }
  );
  return Titles;
};
