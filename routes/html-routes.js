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
    db.Location.findAll({
      raw: true,
      where: { state: req.params.stateId },
      attributes: ["id", "parkname"],
    }).then((data) => {
      let handlebarsObj = {
        parks: data,
      };
      res.render("locations", handlebarsObj);
    });
  });
  app.get("/locations/:stateId/:parkId", isAuthenticated, (req, res) => {
    let parkId = req.params.parkId;
    db.Location.findOne({
      raw: true,
      where: { id: parkId },
    }).then((data) => {
      res.render("location", data);
    });
  });
  app.get(
    "/locations/:stateId/:parkId/checklist",
    isAuthenticated,
    (req, res) => {
      res.render("checklist");
    }
  );
};
