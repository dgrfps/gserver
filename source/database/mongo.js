var mongoose = require('mongoose');
var config = require('../../config.json')

const db = { }
db.connect = function(){
    mongoose.connect(config.db, {useNewUrlParser: true}).then(() => {
        console.log("[DATABASE] Connected to db")
    }).catch(err => console.log(err));
};

db.user = require('./schemas/user')

module.exports = db;