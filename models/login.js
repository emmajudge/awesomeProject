const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    usernameSchema: {type: String, required: true},
    passwordSchema: {type: String, required: true}
})

const LoginModel = mongoose.model("Login", loginSchema)

module.exports = LoginModel;