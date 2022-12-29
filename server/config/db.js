const mongoose =require("mongoose");
require('dotenv').config()
const uri = process.env.URI;



mongoose.connect(uri, { useNewUrlParser: true, dbName: "fiverr-task" })

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connected to MongoDB!");
});
