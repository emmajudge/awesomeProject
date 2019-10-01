const db = require("../models");
const bcryptjs = require("bcryptjs");
const monogoose = require("mongoose");

module.exports = {
    checkLogin: function(request, response) {
        console.log(request.body);
        db.Login.findOne({username: request.body.username}, function(error, found)
        // find({username: request.body.username}).limit(1).next(function(error, doc)
        {
            if (error) throw error;
            if(found.password){
            bcryptjs.compare(request.body.password, found.password, function(error, check)
            {
                if (check)
                    console.log("Success");
                else
                    console.log("Wrong Password");
            })
        }
        })

    },
    // createLogin: function (request, response) {
    createLogin: function (request, response) {
                var newUsername = request.body.username;
                var newPassword = request.body.password;
                
                bcryptjs.genSalt(10, function(error, salt)
                {
                    bcryptjs.hash(newPassword, salt, function(error, hash)
                    {
                        db.Login.create({username: newUsername, password: hash, amountDonated: 0, favoriteCharites: []});
                    })
                })
    }
}