const router = require("express").Router();
const bookRoutes = require("./books");
const featureRoutes =require("./features")
const userRoutes=require("./users")
const donationRoutes=require("./donations")

// Book routes
router.use("/books", bookRoutes);

// Featured organization scrape routes
router.use("/features", featureRoutes);

// Charity donation routes
router.use("/users", userRoutes);

// User routes
router.use("/donations", donationRoutes);

module.exports = router;
