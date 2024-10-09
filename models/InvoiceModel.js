import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Invoice = db.define(
    "Invoice",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        invoiceNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        tableName: "invoice"
    }
);

export default Invoice;