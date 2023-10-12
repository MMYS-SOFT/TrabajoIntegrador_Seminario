import { sequelize } from "../conf/db.js";
import { DataTypes } from "sequelize";

export const Preguntas = sequelize.define("Preguntas", {
  conten: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
});
