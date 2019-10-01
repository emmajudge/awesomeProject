const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featureSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    link: {
        type: String,
        // required: true
    },
    saved: {
        type: Boolean,
        default: false
    }
});

// for the saved property, need to figure out how to tie the saved boolean value to the specific member -- or (if no one is currently signed in) prompt user to login/sign up to save

const Feature = mongoose.model("Feature", featureSchema);

module.exports = Feature;

