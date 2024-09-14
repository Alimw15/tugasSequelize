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
        phonenumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commisionrate: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: "salesperson"
    }
);

export default SalesPerson;