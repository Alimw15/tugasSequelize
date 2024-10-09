import express from "express"
import { createCustomer, deleteCustomer, getAllCustomer, getCustomerById, updateCustomer } from "../controller/CustomerController.js";
import { createOrder, deleteOrder, getAllOrder, getOrderById, updateOrder } from "../controller/OrderController.js";
import { createSalesPerson, deleteSalesPerson, getAllSalesPerson, getSalesPersonById, updateSalesPerson } from "../controller/SalesPerson.js";
import { getAllInvoice, getInvoiceById, createInvoice, updateInvoice, deleteInvoice } from "../controller/InvoiceController.js";
import { getAllCar, getCarById, createCar, updateCar, deleteCar } from "../controller/CarController.js";    

const router = express.Router();

router.get("/customer", getAllCustomer);
router.get("/customer/:id", getCustomerById);
router.post("/createCustomer", createCustomer);
router.put("/updateCustomer/:id", updateCustomer);
router.delete("/deleteCustomer/:id", deleteCustomer);

router.get("/invoice", getAllInvoice);
router.get("/invoice/:id", getInvoiceById);
router.post("/createInvoice", createInvoice);
router.put("/updateInvoice/:id", updateInvoice);
router.delete("/deleteInvoice/:id", deleteInvoice);

router.get("/car", getAllCar);
router.get("/car/:id", getCarById);
router.post("/createCar", createCar);
router.put("/updateCar/:id", updateCar);
router.delete("/deleteCar/:id", deleteCar);

router.get("/order", getAllOrder);
router.get("/order/:id", getOrderById);
router.post("/createOrder", createOrder);
router.put("/updateOrder/:id", updateOrder);
router.delete("/deleteOrder/:id", deleteOrder);

router.get("/salesperson", getAllSalesPerson);
router.get("/salesperson/:id", getSalesPersonById);
router.post("/createSalesPerson", createSalesPerson);
router.put("/updateSalesPerson/:id", updateSalesPerson);
router.delete("/deleteSalesPerson/:id", deleteSalesPerson);

export default router;