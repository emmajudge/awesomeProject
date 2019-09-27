const db = require("../models");

// define methods for the booksController which will be routed in the /routes/api/features.js file and called in the client API.js file
module.exports = {
    findAll: function (req, res) {
        db.Feature
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Feature
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
