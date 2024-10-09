import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Car = db.define(
    "Car",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "car"
    }
);

export default Car;