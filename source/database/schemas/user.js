const mongoose = require("mongoose");
 
var User = mongoose.model("User", new mongoose.Schema({
    uuid: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    money: { type: Number, default: 0 },
    banned: { type: Boolean, default: false},
}));
 
module.exports = User;