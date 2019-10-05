const db = require("../models");

// Defining methods for the Controller
module.exports = {
  findAll: function(req, res) {
    db.Donation
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addDonation: function(request, response) {
    db.Donation.findOneAndUpdate({name: request.body.name}, {$inc: {donation: request.body.donation}}).then(Donation => response.json(Login));
  },
  addDonateUser: function(request, response) {
    db.Login.findOneAndUpdate({loggedIn: true}, {$inc: {amountDonated: request.body.amountDonated}}).then(Login => response.json(Login));
  }
};