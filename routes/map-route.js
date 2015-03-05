/**
 * Created by teithun on 27.02.2015.
 */

var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
   res.render("map", {title: "** OpenLayers test **", message: "OpenLayers/ OpenStreetMap", coordmessage: "Click on the map to get coordinates."});
});

module.exports = router;