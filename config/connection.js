const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

mongoose.connection
  .on("error", (err) => console.log(err.message + "MongoDB Err?"))
  .on("connected", () => console.log("We Are MongoDB Live!"))
  .on("disconnected", () => console.log("No Longer Live MongoDB!"));
