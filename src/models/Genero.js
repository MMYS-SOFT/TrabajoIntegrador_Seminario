import dataTypes from "sequelize/lib/data-types";
import { sequelize} from "../conf/db.js";

export const GeneroUser = sequelize.define("GeneroUser",{
    name: {
        type: dataTypes.STRING(50),
        allowNull: false
    }
})