const router = require("express").Router();
const bookRoutes = require("./books");
const featureRoutes =require("./features")
const userRoutes=require("./users")
const donationRoutes=require("./donations")
const loginData = require("./login")

// Book routes
router.use("/books", bookRoutes);

// Featured organization scrape routes
router.use("/features", featureRoutes);

// Donation routes - 
// commented these out for now (until we have routes defined) bc it was causing errors
// router.use("/users", userRoutes);

router.use("/account", loginData);

// User routes
// commented these out for now (until we have routes defined) bc it was causing errors
// router.use("/donations", donationRoutes);

module.exports = router;
