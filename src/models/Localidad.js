import { sequelize } from "../conf/db.js";

import { DataTypes } from "sequelize";

export const LocalidadModel = sequelize.define("Localidad", {
  name: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});
