const mongoose = require("mongoose");
require("../config/connection");

const OrdersSchema = new mongoose.Schema({
  user: String,
  items: [String],
  total: Number,
});

module.exports = mongoose.model("Orders", OrdersSchema);
