import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Payment = db.define(
    "Payment",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        paymentdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        amountpaid: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    },
    {
        tableName: "payment"
    }
);

export default Payment;