const db = require("../models");

// Defining methods for the Controller
module.exports = {
  findAll: function(req, res) {
    db.Donation
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};