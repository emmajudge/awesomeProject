const router = require("express").Router();
const donationController = require("../../controllers/donationController");

// Matches with "/api/donation"
router.route("/")
  .get(donationController.findAll)

// Matches with "/api/donation/pushNew"
router.route("/pushNew")
  .put(donationController.update)

module.exports = router;