// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const mailgun = require("mailgun-js");
require("dotenv").config();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  app.get("/welcome", (req, res) => {});
  app.get("/locations", (req, res) => {});
  app.get("/location", (req, res) => {});
  app.get("/checklist", (req, res) => {});
  app.post("/email", (req, res) => {
    const data = {
      from: process.env.mailgun_from_address,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
    };
    //console.log(data);
    const DOMAIN = process.env.mailgun_domain;
    console.log(DOMAIN);
    const mg = mailgun({
      apiKey: process.env.mailgun_api_key,
      domain: DOMAIN,
    });

    mg.messages().send(data, function(error, body) {
      res.json(body);
    });
  });
};
