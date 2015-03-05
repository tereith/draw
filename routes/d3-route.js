/**
 * Created by teithun on 27.02.2015.
 */

var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
   res.render("d3", {title: "** D3 svg test **", message: "Testing D3"});
});

module.exports = router;
