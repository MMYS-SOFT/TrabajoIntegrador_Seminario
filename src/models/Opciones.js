import { sequelize } from "../conf/db.js";
import { DataTypes } from "sequelize";

export const OpcionModel = sequelize.define("Opciones", {
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});
