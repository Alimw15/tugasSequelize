import Order from "../models/OrderModel.js";
import Customer from "../models/CustomerModel.js";
import SalesPerson from "../models/SalesPersonModel.js";
import Car from "../models/CarModel.js";
import Invoice from "../models/InvoiceModel.js";

export const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [Customer, SalesPerson, Car, Invoice]
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Terjadi kesalahan saat mengambil semua Order" });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id, {
            include: [Customer, SalesPerson, Car, Invoice]
        });
        if (!order) {
            return res.status(404).json({ message: "Order tidak ditemukan" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil Order", error: error.message });
    }
};

export const createOrder = async (req, res) => {
    try {
        const { orderDate, CustomerId, SalesPersonId, CarIds } = req.body;
        const order = await Order.create({ 
            orderDate,
            CustomerId,
            SalesPersonId
        });

        if (CarIds && CarIds.length > 0) {
            await order.setCars(CarIds);
        }

        const createdOrder = await Order.findByPk(order.id, {
            include: [Customer, SalesPerson, Car, Invoice]
        });

        res.status(201).json({
            message: "Order berhasil dibuat",
            data: createdOrder
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat Order",
            error: error.message
        });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { orderDate, CustomerId, SalesPersonId, CarIds } = req.body;
        const orderId = req.params.id;

        const order = await Order.findByPk(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order tidak ditemukan" });
        }

        await order.update({ 
            orderDate,
            CustomerId,
            SalesPersonId
        });

        if (CarIds && CarIds.length > 0) {
            await order.setCars(CarIds);
        }

        const updatedOrder = await Order.findByPk(orderId, {
            include: [Customer, SalesPerson, Car, Invoice]
        });

        res.status(200).json({
            message: "Order berhasil diupdate",
            data: updatedOrder
        });
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Gagal mengupdate Order" });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: "Order tidak ditemukan" });
        }
        await order.destroy();
        res.status(200).json({ message: `Order dengan id ${id} berhasil dihapus` });
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Gagal menghapus Order" });
    }
};