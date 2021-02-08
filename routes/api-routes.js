// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const mailgun = require("mailgun-js");
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });
  app.get("/favorite-parks", (req, res) => {
    db.User_Profiles.findAll({
      raw: true,
      where: {
        UserId: req.user.id,
      },
      attributes: ["LocationId", "locationName"],
    }).then((data) => {
      console.log(data);
      let handlebarsObj = {
        favoriteParks: data,
      };
      res.render("favorite-parks", handlebarsObj);
    });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", isAuthenticated, (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
  app.post("/api/send_email", isAuthenticated, (req, res) => {
    const data = {
      from: process.env.mailgun_from_address,
      to: req.user.email,
      subject: req.body.subject,
      text: req.body.body,
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
  app.get("/api/park_equipment", isAuthenticated, (req, res) => {
    db.Parks.getAll(req.user.email, parkId, (error, data) => {
      console.log(error);
      //res.render("location", data);
    });
    data = [
      {
        id: 1,
        itemName: "chain",
        owned: true,
        need: true,
      },
      {
        id: 2,
        itemName: "lantern",
        owned: false,
        need: true,
      },
      {
        id: 3,
        itemName: "hammer",
        owned: true,
        need: false,
      },
    ];
    //Handlebars.registerPartial("equipment-list");
    res.render("equipment-list", data);
  });
  app.put(
    "/api/park_equipment/update_equipment_need_status",
    isAuthenticated,
    (req, res) => {
      db.Parks_Equipment.updateNeedStatus(equipment_list, (data) => {
        // accepts as parameter a list of equipment ids from the checklist
        // for each of the equipment needs to change Need status to true
      });
    }
  );

  // POST route for adding new equipment to the database
  app.post("/api/equipment/add_one", (req, res) => {
    db.Equipment.create({
      itemName: req.body.item_name,
      UserId: req.body.user_id,
      LocationId: req.body.location_id,
    }).then((dbEquipment) => res.json(dbEquipment));
  });

  // PUT route for updating need status of an item
  app.put("/api/equipment/update_need_status", (req, res) => {
    db.Equipment.update(needStatus, {
      where: {
        id: req.body.itemId,
      },
    }).then((needUpdate) => res.json(needUpdate));

    /*     db.Location.UpdateOne(req.user.email, equipment_id, (data) => {
      // this function will be called when we delete the item from the list
      // should set Need status to false in the Park_Equipment model
      // and then I will call db.Equipment_Location.getAll to get refreshed data
      res.render("equipment-list", data);
    }); */
  });

  // GET route for retrieving needed equipment
  app.get("/api/park_equipment/retrieve_needed_equipment", (req, res) => {
    db.Equipment.findAll({
      where: {
        need: true,
        UserId: req.body.user_id,
        LocationId: req.body.location_id,
      },
      include: [db.User, db.Location],
    }).then((equipment_list) => res.json(equipment_list));

    /*     let parkId = req.body.location_id;
    db.Equipment_Location.getAll(req.user.email, parkId, (data) => {
      //should return a list of equipment with Need status true and Own status true or false
      res.render("equipment-list", data);
    }); */
  });
  app.post("/api/user_profiles/favorites", (req, res) => {
    db.User_Profiles.create({
      locationName: req.body.locationName,
      LocationId: req.body.locationId,
      UserId: req.user.id,
      favorite: true,
    }).then((data) => {
      res.json(data);
    });
  });
  app.delete("/api/user_profiles/favorites", (req, res) => {
    db.User_Profiles.destroy({
      where: { UserId: req.user.id, LocationId: req.body.locationId },
    }).then((data) => {
      res.json(data);
    });
  });

  app.post("/api/user_profiles/favorites/status", (req, res) => {
    db.User_Profiles.findOne({
      where: {
        UserId: req.user.id,
        LocationId: req.body.locationId,
      },
      attributes: ["favorite"],
    }).then((favorite_status) => res.json(favorite_status));
  });
  // PUT route for updating owned status of an item
  app.put("/api/park_equipment/update_own_status", (req, res) => {
    db.Equipment.update(ownedStatus, {
      where: {
        id: req.body.itemId,
      },
    }).then((ownedUpdate) => res.json(ownedUpdate));

    /*     db.Equipment_Location.updateOne(req.user.email, locationId, (data) => {
      // should update Own status to true in the Equipment_Location model
      // and it should return the object back with updated info
      res.render("equipment-list", data);
    }); */
  });
};
