import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Order = db.define(
    "Order",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        orderdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        orderamount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        tableName: "order"
    }
);

export default Order;