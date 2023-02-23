const dotenv = require("dotenv").config();
const express = require("express");

const hostname = "127.0.0.1";
const port = 5000;
const app = express();
const connectDB = require("./config/connectDB");

app.get("/", (req, res) => {
  res.send("Hello developers , this is pinaki sankar ray welcome ! to the mernstack development bootcamp");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, hostname, () => {
      console.log(`this server is hosting on http://${hostname}:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
