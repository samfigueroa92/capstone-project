// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const sendGrid = require("@sendgrid/mail"); 

// CONFIGURATION
const app = express();

const sendGrid_API = process.env.SENDGRID_API;

sendGrid.setApiKey(`${sendGrid_API}`);

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// CONTROLLERS
const usersController = require("./controllers/usersController");
app.use("/users", usersController);

const requestsController = require("./controllers/requestsController");
app.use("/requests", requestsController);

const reviewsController = require("./controllers/reviewsController");
app.use("/reviews", reviewsController);

const ratingsController = require("./controllers/ratingsController");
app.use("/ratings", ratingsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Golden Solutions Database!");
});

//email page
app.get('/send-email', (req, res) => {
  //get variables from query string
  const {recipient, sender, topic, text} = req.query;

  //SendGrid requirements
  const message = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text,
  };

  //send email
  sendGrid.send(message)
  .then((message) => console.log(text))
  .catch(err => console.log(err))
})

app.get("*", (req, res) => {
  res.status(404).send("Error : Page not found");
});

// EXPORT
module.exports = app;
