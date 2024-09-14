import Customer from "../../models/CustomerModel.js";
import Payment from "../../models/PaymentModel.js";
import Order from "../../models/OrderModel.js";
import SalesPerson from "../../models/SalesPersonModel.js";
import Vehicle from "../../models/VehicleModel.js";

export default async function clean() {
  await Customer.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Payment.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Order.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await SalesPerson.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Vehicle.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}
