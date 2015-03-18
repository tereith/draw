(function () {
    "use strict"
    var map;

    (function init() {
        console.log("init....");
        map = new ol.Map({
            target: 'map',
            renderer: 'canvas',
            view: new ol.View({
                projection: 'EPSG:900913',
                center: [1157172.95294, 9206597.85639],
                zoom: 12
            })
        });

        var openStreetMapLayer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
        map.addLayer(openStreetMapLayer);

        map.on("click", function (evt) {
            console.log(evt);
            //console.log(evt.coordinate);
            writeCoordinatesToHtml(evt.coordinate);
        });

        $("#import-gpx-btn").click(function () {
            confirm("Import GPX action here.. (not implemented yet)");
/*            this.file().choose(function(e, input) {
                alert(input.val()); //alerts the chosen filename.
            });*/
        });

    })();

    function writeCoordinatesToHtml(coordinates) {
        var x;
        var y;
        x = coordinates[0];
        y = coordinates[1];
        console.log("x = " + x);
        console.log("y = " + y);
        /*$(".coordinates").css("background-color", "red");*/
        $(".coordinates").empty();
        $(".coordinates").append("<p>x = " + x + "</br>y = " + y + "</p>");

    }
})();
