const mongoose = require("mongoose");
require("../config/connection");

const OrdersSchema = new mongoose.Schema({
  user: String,
  items: { type: Array, default: [] },
  total: Number,
});

module.exports = mongoose.model("Orders", OrdersSchema);
