const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    donation: { type: Number, required: true }
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
