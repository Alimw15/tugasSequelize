import express from "express"
import { createCustomer, deleteCustomer, getAllCustomer, getCustomerById, updateCustomer } from "../controller/CustomerController.js";
import { createPayment, deletePayment, getAllPayment, getPaymentById, updatePayment } from "../controller/PaymentController.js";
import { createVehicle, deleteVehicle, getAllVehicle, getVehicleById, updateVehicle } from "../controller/VehicleController.js";
import { createOrder, deleteOrder, getAllOrder, getOrderById, updateOrder } from "../controller/OrderController.js";
import { createSalesPerson, deleteSalesPerson, getAllSalesPerson, getSalesPersonById, updateSalesPerson } from "../controller/SalesPerson.js";

const router = express.Router();

router.get("/customer", getAllCustomer);
router.get("/customer/:id", getCustomerById);
router.post("/createCustomer", createCustomer);
router.put("/updateCustomer/:id", updateCustomer);
router.delete("/deleteCustomer/:id", deleteCustomer);

router.get("/payment", getAllPayment);
router.get("/payment/:id", getPaymentById);
router.post("/createPayment", createPayment);
router.put("/updatePayment/:id", updatePayment);
router.delete("/deletePayment/:id", deletePayment);

router.get("/vehicle", getAllVehicle);
router.get("/vehicle/:id", getVehicleById);
router.post("/createVehicle", createVehicle);
router.put("/updateVehicle/:id", updateVehicle);
router.delete("/deleteVehicle/:id", deleteVehicle);

router.get("/order", getAllOrder);
router.get("/order/:id", getOrderById);
router.get("/createOrder", createOrder);
router.get("/updateOrder/:id", updateOrder);
router.get("/deleteOrder/:id", deleteOrder);

router.get("/salesperson", getAllSalesPerson);
router.get("/salesperson/:id", getSalesPersonById);
router.get("/createSalesPerson", createSalesPerson);
router.get("/updateSalesPerson/:id", updateSalesPerson);
router.get("/deleteSalesPerson/:id", deleteSalesPerson);

export default router;