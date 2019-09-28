const db = require("../models");
const bcryptjs = require("bcryptjs");

module.exports = {
    checkLogin: function(request, response) {
        console.log("Connectected");
        db.userData.findOne({username: request.body.username}, function(error, found)
        {
            bcryptjs.compare(request.body.password, found.password, function(error, check)
            {
                if (check)
                    console.log("Success");
                else
                    console.log("Wrong Password");
            })
        })

    },
    // createLogin: function (request, response) {
    createLogin: function (request, response) {
        console.log("Test");
                var newUsername = request.body.username;
                var newPassword = request.body.password;
                
                bcryptjs.genSalt(10, function(error, salt)
                {
                    bcryptjs.hash(newPassword, salt, function(error, hash)
                    {
                        // console.log(db.LoginModel);
                        // db.LoginModel.create({username: newUsername, password: hash});
                        // db.LoginModel.create({username: newUsername, password: hash})
                    })
                })
    }
}