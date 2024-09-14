import Customer from "../models/CustomerModel.js";
import Payment from "../models/PaymentModel.js";
import Order from "../models/OrderModel.js";
import SalesPerson from "../models/SalesPersonModel.js";
import Vehicle from "../models/VehicleModel.js";
import clean from "./helpers/clean.js";
import "../models/index.js"

const createSeeder = async () => {
  await clean();
  const customer = await Customer.create({
    name: "John Doe",
    email: "johndoe@email.com",
    address: "Jln. Soekarno",
  });

  const salesperson = await SalesPerson.create({
    name: "Peter Greg",
    phonenumber: 12556677,
    commisionrate: 5,
  });

  const vehicle = await Vehicle.create({
    brand: "nissan",
    model: "gtr",
    price: 300000,
  });

  const order = await Order.create({
    orderdate: 2025 - 2 - 12,
    orderamount: 1,
    CustomerId: customer.dataValues.id,
    SalesPersonId: salesperson.dataValues.id,
    VehicleId: vehicle.dataValues.id,
  });

  const payment = await Payment.create({
    paymentdate: 2025 - 0o2 - 14,
    amountpaid: 300000,
    OrderId: order.dataValues.id,
  });

  return { customer, salesperson, vehicle, order, payment };
};

const customer = await createSeeder();

console.log(customer);
