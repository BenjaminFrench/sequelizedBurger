var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.Burger.findAll({}).then( result => {
        var hbsObject = {
            burgers: result
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    db.Burger.create({
        burger_name: req.body.name,
        devoured: false
    }).then( dbBurger => {
        res.json(dbBurger);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id=" + req.params.id;

    console.log("condition", condition);

    db.Burger.update({
        devoured: true
        }, {
        where: {
            id: req.params.id
        }
    }).then( (dbBurger) => {
        res.json(dbBurger);
    });
});

// reset all burgers to not devoured
router.get("/api/burgers/reset", function (req, res) {
    db.Burger.findAll().then( (results) => {
        console.log(results);
        results.forEach(element => {
            element.update({devoured: false});
        });
        res.json("Success");
    });
});

// Export routes for server.js to use.
module.exports = router;
