import db from "../utils/connection.js";
import Customer from "./CustomerModel.js";
import SalesPerson from "./SalesPersonModel.js";
import Order from "./OrderModel.js";
import Car from "./CarModel.js";
import Invoice from "./InvoiceModel.js";

// await Customer.sync();
// await Payment.sync();
// await Order.sync();
// await SalesPerson.sync();
// await Vehicle.sync();


Customer.hasMany(Order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Order.belongsTo(Customer, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

SalesPerson.hasMany(Order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})
Order.belongsTo(SalesPerson, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

Car.belongsToMany(Order, {
  through: "orderCar",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})
Order.belongsToMany(Car, {
  through: "orderCar",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

Order.hasOne(Invoice, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})
Invoice.belongsTo(Order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

// await db.sync({force: true})
await db.sync();
