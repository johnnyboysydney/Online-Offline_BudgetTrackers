// Dependencies and variables
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// Sets up the Express App
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Use Routes
app.use(require("./routes/api.js"));

// Start  App
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});