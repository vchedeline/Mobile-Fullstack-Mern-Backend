// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT = 8008 } = process.env;
const app = express();
const Orders = require("./models/orders");
// MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
// Home
app.get("/", (req, res) => {
  res.send("I Am Home");
});

//IDUCS (from INDUCES)
// Index
app.get("/orders", async (req, res) => {
  try {
    res.json(await (await Orders.find({})).reverse());
  } catch (error) {
    res.status(400).json(error);
  }
});
// Delete
app.delete("/orders/:id", async (req, res) => {
  try {
    res.json(await Orders.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
// Update
app.put("/orders/:id", async (req, res) => {
  try {
    res.json(
      await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true }),
    );
  } catch (error) {
    res.status(400).json(error);
  }
});
// Create
app.post("/orders", async (req, res) => {
  try {
    res.json(await Orders.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});
// Show
app.get("/orders/:id", async (req, res) => {
  try {
    res.json(await Orders.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(PORT, () => console.log(`LIVE on Port ${PORT}!`));
