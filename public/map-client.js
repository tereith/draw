console.log("hello Map");




var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: "http://openwms.statkart.no/skwms1/wms.topo2?request=GetMap"
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.transform(
            [10.35893, 63.34940],
            'EPSG:4326', 'EPSG:3857'
        ),
        zoom: 16
    })
});