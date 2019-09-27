const router = require("express").Router();
const bookRoutes = require("./books");
const featureRoutes =require("./features")

// Book routes
router.use("/books", bookRoutes);

// Featured organization scrape routes
router.use("/features", featureRoutes);

module.exports = router;
