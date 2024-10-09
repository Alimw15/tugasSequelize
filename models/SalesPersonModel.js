import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const SalesPerson = db.define(
    "SalesPerson",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "salesperson"
    }
);

export default SalesPerson;