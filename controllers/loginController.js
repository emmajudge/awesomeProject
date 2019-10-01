const db = require("../models");
const bcryptjs = require("bcryptjs");
const monogoose = require("mongoose");

module.exports = {
    checkLogin: function(request, response) {
        console.log(request.params.id);
        db.Login.findOne({username: request.body.username}, function(error, found)
        // find({username: request.body.username}).limit(1).next(function(error, doc)
        {
            if (error) throw error;
            if(found.password){
            bcryptjs.compare(request.body.password, found.password, function(error, check)
            {
                if (check)
                    // response = "Success";
                    // console.log("Success");
                    {
                    console.log("Success");
                    db.Login.findOneAndUpdate({username: request.body.username}, {$set: {loggedIn: 1}}).then(Login => response.json(Login))
                    // console.log(found.loggedIn);
                    // db.Login.findOneAndUpdate({username: request.body.username}, {$set: {loggedIn: 1}});
                    // db.Login.updateOne({username: found.username}, [{loggedIn: 1}])
                    // console.log(found.loggedIn);
                    }
                else
                    console.log("Wrong");
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
                        db.Login.create({username: newUsername, password: hash, amountDonated: 0, favoriteCharites: [], loggedIn: false});
                    })
                })
    },
    //New Code
    getAmount: function (request, response) {
        // console.log(request.params.id);
        // db.Login.findOne({_id: request.params.id}, function(error, found)
        // db.Login.findOne({username: request.params.id}, function(error, found)
        // {
        //     if (error) throw error;
        //     console.log(found.amountDonated);
        // })
    },
    logInUser: function(request, response) {
        console.log(request.body.username);
        db.Login.findOneAndUpdate({username: request.body.username}, {$set: {loggedIn: 0}}).then(Login => response.json(Login))
        // db.Login.findOneAndUpdate({username: request.body.username}, {$set: {loggedIn: 0}})
    }
}