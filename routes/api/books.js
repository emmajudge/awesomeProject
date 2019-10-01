const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const loginController = require("../../controllers/loginController");

router.route("/login")
  .post(loginController.createLogin)
  .put(loginController.logInUser)

router.route("/create")
  .post(loginController.checkLogin);

router.route("/:id")
  .get(loginController.getAmount)
  
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
