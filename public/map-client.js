var map;
console.log("map-client.js loading...")

function init(){
    console.log("init....")
    map = new ol.Map({
        target:'map',
        renderer:'canvas',
        view: new ol.View({
            projection: 'EPSG:900913',
            center:[1157172.95294,9206597.85639],
            zoom:12
        })
    });
    var openStreetMapLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    map.on("singleclick", function(evt) {
       console.log(evt);
       console.log(evt.coordinate);
       console.log(evt.point);
    });

    map.addLayer(openStreetMapLayer);
}

init();