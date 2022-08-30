const express = require("express");
const cors = require("cors");

const products = require("./products");
const users = require("./users");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the shop...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/users", (req, res) => {
  res.send(users);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Check Server running on port ${port}`));
