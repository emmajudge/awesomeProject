const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const loginController = require("../../controllers/loginController");
const donationController = require("../../controllers/donationController");

router.route("/login")
  .post(loginController.createLogin)
  .put(loginController.logoutUser)

router.route("/create")
  .post(loginController.checkLogin);

router.route("/:id")
  .get(loginController.getUser);
  
router.route("/add")
  .put(loginController.addFavorite);

router.route("/donate")
  .put(donationController.addDonation);

router.route("/userDonate")
  .put(donationController.addDonateUser);
  
// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
