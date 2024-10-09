import Customer from "../models/CustomerModel.js";
import SalesPerson from "../models/SalesPersonModel.js";
import clean from "./helpers/clean.js";
import "../models/index.js"
import Car from "../models/CarModel.js";
import Order from "../models/OrderModel.js";
import Invoice from "../models/InvoiceModel.js";

const createSeeder = async () => {
  await clean();
  const customer = await Customer.create({
    name: "John Doe",
    email: "johndoe@email.com",
    phone: 6281234567890,
  });

  const salesperson = await SalesPerson.create({
    name: "Peter Greg",
    email: "petergreg@emal.com",
    phone: 6281209876543,
  });

  const car = await Car.create({
    brand: "porsche",
    model: "carrera",
    price: 3000000,
  });

  const order = await Order.create({
    orderDate: new Date("2024-10-08") ,
    CustomerId: customer.dataValues.id,
    SalesPersonId: salesperson.dataValues.id,
  });

  const invoice = await Invoice.create({
    invoiceNumber: 12345,
    totalAmount: 1,
    OrderId: order.dataValues.id,
  });

  return { customer, salesperson, car, order, invoice };
};

const customer = await createSeeder();

console.log(customer);
