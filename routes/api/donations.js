const router = require("express").Router();
const donationController = require("../../controllers/donationController");

// Matches with "/api/donation"
router.route("/")
  .get(donationController.findAll)

module.exports = router;