import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const User = db.define(
    "User",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "users",
        timestamps: true,
    }
);

export default User;