const db = require("../models");

// Defining methods for the Controller
module.exports = {
  findAll: function (req, res) {
    db.Donation
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Donation
      .findOneAndUpdate({ name: req.params.charityName }, 
        {"$push": {donation:(req.body)}
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
} 
