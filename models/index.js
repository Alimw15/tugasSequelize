import db from "../utils/connection.js";
import Customer from "./CustomerModel.js";
import Payment from "./PaymentModel.js";
import Order from "./OrderModel.js";
import SalesPerson from "./SalesPersonModel.js";
import Vehicle from "./VehicleModel.js";

// await Customer.sync();
// await Payment.sync();
// await Order.sync();
// await SalesPerson.sync();
// await Vehicle.sync();


Customer.hasMany(Order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Vehicle.hasMany(Order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

SalesPerson.hasMany(Order, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Order.hasOne(Payment, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

Order.belongsTo(Customer, {
  foreignKey: "CustomerId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Order.belongsTo(Vehicle, {
  foreignKey: "VehicleId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Order.belongsTo(SalesPerson, {
  foreignKey: "SalesPersonId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Order.hasOne(Payment, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Payment.belongsTo(Order, {
  foreignKey: "OrderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// await db.sync({force: true})
await db.sync();
