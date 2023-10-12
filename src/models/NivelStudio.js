import { sequelize } from "../conf/db.js";
import { DataTypes } from "sequelize";

export const NivelStudioModel = sequelize.define("NivelStudio", {
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});
