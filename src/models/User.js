import { sequelize } from "../conf/db";

export const User = sequelize.define("User", {
  edad: {
    type: dataTypes.INTEGER(15),
    allowNull: false,
  },
});
