// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const fruits = require("./models/fruits");

// CONFIGURATION
const app = express();
const PORT = process.env.PORT ?? 3000;

// DATA => models folder

// ROUTES
app.get("/", (req, res) => {
  res.send("test!");
});

// index
app.get("/fruits/", (req, res) => {
  res.send(`
  <h1>Fruits</h1>
  <ul>
    ${fruits
      .map((el) => {
        return `<li>${el.name}</li>`;
      })
      .join("")}
  </ul>
  `);
});

app.get("/fruits/:index", (req, res) => {
  const index = req.params.index;
  res.send(fruits[index]);
});

// Listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
