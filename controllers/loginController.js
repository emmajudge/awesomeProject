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
                        response.send("Logging In...");
                    }
                    else
                        response.send("Incorrect Password");
                })
            }
        })
    },
    //End Of checkLogin Function

    //Function To Create A New User
    createLogin: function (request, response) {
        console.log("Creating...");
        console.log(request.body);
        //Setting The New Variables
        var newFirstName = request.body.firstName;
        // console.log("Creating User");
        // var newFirstName = "Alex";
        var newUsername = request.body.username;
        // if (request.body.password1 != request.body.password2)
        //     response.send("Passwords Are Not The Same");
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

        //For Getting The Total
        ////////////////////////////////////////////////////////////////////
        // let total = 0;
        // db.Login.find({}, function(error, docs)
        // {
        //     for (let i = 0; i < docs.length; i++)
        //     {
        //         total += docs[i].amountDonated;
        //     }
        //     console.log(total);
        // })
    },
    //End Of getAmount Function

    //Sets The Logged In User's Status To False
    logoutUser: function(request, response) {
        console.log(request.body.username);
        db.Login.findOneAndUpdate({username: request.body.username}, {$set: {loggedIn: false}}).then(Login => response.json(Login));
    },
    //End Of logoutUser Function

    viewAccount: function(request, response) {
        // console.log(request);
    //     db.Login.findOne({loggedIn: 1}, function(error, found){
    //         if (error) throw error;
    //         // console.log(found.username)
    //         }).then(Login => found.json(Login));
    // db.Login
    //     .findOne({loggedIn: 1})
    //     // .then(dbLogin => response.json({username: "Steelflex"}))
    //     , function (error, found) {console.log("New" + found)}
    },

    addFavorite: function(request, response) {
        db.Login.findOneAndUpdate({loggedIn: true}, {$push: {favoriteCharities: request.body.name}}).then(Login => response.json(Login));
    }
}