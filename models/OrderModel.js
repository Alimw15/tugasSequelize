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
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "order"
    }
);

export default Order;