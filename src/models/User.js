import { sequelize } from "../conf/db";

export const UserModel = sequelize.define(
  "User",
  {
    edad: {
      type: dataTypes.INTEGER(15),
      allowNull: false,
    },
  },
  {
    tableName: "User",
  }
);
