// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const mailgun = require("mailgun-js");
const db = require("../models");
require("dotenv").config();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("/welcome");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("/welcome");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/welcome", isAuthenticated, (req, res) => {
    res.render("welcome");
  });
  app.get("/locations/:stateId", isAuthenticated, (req, res) => {
    let stateId = req.params.stateId;
    res.render("locations", { stateID: stateId });
  });
  app.get("/locations/:stateId/:parkId", isAuthenticated, (req, res) => {
    let parkId = req.params.parkId;
    let stateId = req.params.stateId;
    let data = {
      id: 1,
      parkName: "Hopewell Culture National Historical Park",
      address: "National park in Ross County,",
      state: "OH",
      url: "somewhere.com",
      parkDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      weatherDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    };
    res.render("location", data);
  });
  app.get("/favorite-parks", isAuthenticated, (req, res) => {
    res.render("favorite-parks");
  });
};
