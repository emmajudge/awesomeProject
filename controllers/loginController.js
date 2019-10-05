//Dependencies
const db = require("../models");
const bcryptjs = require("bcryptjs");

module.exports = {

    //Function To Try And Log In The User
    checkLogin: function(request, response) {

        console.log("Logging In...");
        //Searches The Database For The Requested Username
        db.Login.findOne({username: request.body.username}, function(error, found)
        {
            if (error) throw error;

            //If A Password Is Found, It Means That Someone Is Logged in
            if(found.password){

                //If A Username & Password Is Found, Compares The Password
                bcryptjs.compare(request.body.password, found.password, function(error, check)
                {
                    //If Correct, Changes The Login Status
                    if (check)
                    {
                        db.Login.findOneAndUpdate({username: request.body.username}, {$set: {loggedIn: true}}).then(Login => response.json(Login));
                        response.send("Success: Logging In...");
                    }
                    else
                        response.send("Incorrect Login Infomation");
                })
            }
        })
    },
    //End Of checkLogin Function

    //Function To Create A New User
    createLogin: function (request, response) {
        console.log("Creating...");
        
        //Setting The New Variables
        var newFirstName = request.body.firstName;
        var newUsername = request.body.username;
        var newPassword = request.body.password;

        //Hashes The Password Before Putting It In The Database
        bcryptjs.genSalt(10, function(error, salt)
        {
            if (error) throw error;
            bcryptjs.hash(newPassword, salt, function(error, hash)
            {
                //Adds The New User To The Database
                db.Login.create({username: newUsername, password: hash, firstName: newFirstName, amountDonated: 0, favoriteCharites: [], loggedIn: false})
                .then(response.send("Created")); 
            })
        })
    },
    //End Of createLogin function
    
    //Function To Get The User's Information
    getUser: function (request, response) {

        //Searches For A User That's Logged In
        db.Login.findOne({loggedIn: true}, function (error, found){
            
            //If No One Is Logged In, Sends Them To The Login Page
            if (error) 
                response.render("/login");
            else
                response.send(found);
        })
    },
    //End Of getAmount Function

    //Sets The Logged In User's Status To False
    logoutUser: function(request, response) {
        console.log(request.body.username);
        db.Login.findOneAndUpdate({username: request.body.username}, {$set: {loggedIn: false}}).then(Login => response.json(Login));
    },
    //End Of logoutUser Function

    viewAccount: function(request, response) {},

    addFavorite: function(request, response) {
        db.Login.findOneAndUpdate({loggedIn: true}, {$push: {favoriteCharities: request.body.name}}).then(Login => response.json(Login));
    }
}