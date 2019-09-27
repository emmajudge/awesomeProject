const router = require("express").Router();
const featureController = require("../../controllers/featureController");

// router methods below need to match with the API routes defined in client app (/client/src/utils/API.js)

// Matches with "/api/features"
router.route("/")
    .get(featureController.findAll);

// Matches with "/api/features/:id"
router
    .route("/:id")
    .put(featureController.update);

module.exports = router;
