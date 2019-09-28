const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const loginController = require("../../controllers/loginController");

router.route("/login")
  .post(loginController.createLogin)
  .post(loginController.checkLogin);
  
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
