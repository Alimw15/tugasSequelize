import Customer from "../../models/CustomerModel.js";
import SalesPerson from "../../models/SalesPersonModel.js";
import Car from "../../models/CarModel.js";
import Invoice from "../../models/InvoiceModel.js";
import Order from "../../models/OrderModel.js";

export default async function clean() {
  await Customer.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Car.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Invoice.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await SalesPerson.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Order.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}
