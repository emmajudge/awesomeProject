const db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

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
    },
    scrape: function (req, res) {
        axios.get("https://www.gentlebarn.org/blog/").then(function (response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);

            // Now, we grab every h2 within an article tag, and do the following:
            $("div.post").each(function (i, element) {
                // Save an empty result object
                var result = {};

                // Add the text and href of every link, and save them as properties of the result object
                result.title = $(this)
                    // .children("div.post")
                    .children("h2.title")
                    .text();
                result.link = $(this)
                    .children("div.post")
                    .children("h2.title")
                    .children("a")
                    .attr("href")
                result.description = $(this)
                    .children("div.entry")
                    .children("div.row")
                    .children("div.large-12 columns")
                    .children("p")
                    .text()
                // result.image=$(this)
                //   .children("div.views-field-field-featured-image-external")
                //   .children("a")
                //   .children("a")
                //   .children("img")
                //   .attr("src")

                // Create a new Article using the `result` object built from scraping
                db.Feature.create(result)
                    .then(function (dbArticle) {
                        // View the added result in the console
                        console.log(dbArticle);
                        // res.send(dbArticle)
                    })
                    .catch(function (err) {
                        // If an error occurred, log it
                        console.log(err);
                    });
            })
        })
        //db.Feature.find()
        //res.send(res)
    }
};
