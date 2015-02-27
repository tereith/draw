/**
 * Created by teithun on 27.02.2015.
 */

var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
    }
);

router.get("/", function(req, res) {
   res.render("react", {title: "** React test **", message: "Testing React JS"});
});

module.exports = router;
