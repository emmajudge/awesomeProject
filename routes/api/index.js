const router = require("express").Router();
const bookRoutes = require("./books");
const featureRoutes =require("./features")
const userRoutes=require("./users")
const donationRoutes=require("./donations")

// Book routes
router.use("/books", bookRoutes);
router.use('/donation', donationRoutes );
// Featured organization scrape routes
router.use("/features", featureRoutes);

// Donation routes - 
// commented these out for now (until we have routes defined) bc it was causing errors
// router.use("/users", userRoutes);

// User routes
// commented these out for now (until we have routes defined) bc it was causing errors
// router.use("/donations", donationRoutes);

module.exports = router;
