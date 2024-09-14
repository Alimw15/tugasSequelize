import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Vehicle = db.define(
    "Vehicle",
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
            type: DataTypes.FLOAT,
            allowNull: false
        },
    },
    {
        tableName: "vehicle"
    }
);

export default Vehicle;