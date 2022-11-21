// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Golden Solutions Database! Odds are you should not be here - but, welcome anyway.");
});

const usersController = require("./controllers/usersController");
app.use("/users", usersController);

const requestConroller = require("./controllers/requestController");
app.use("/requests", requestConroller);

const reviewController = require("./controllers/reviewsController");
app.use("/reviews", reviewController);

const ratingsController = require("./controllers/ratingsController");
app.use("/ratings", ratingsController);



app.get("*", (req, res) => {
  res.status(404).send("Error : Page not found");
});

// EXPORT
module.exports = app;
