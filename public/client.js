/**
 * Created by terjeeithun on 05/02/15.
 */

// ************** Generate the tree diagram	 *****************
var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

var i = 0;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function (d) {
        return [d.y, d.x];
    });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// load the external data
d3.csv("treedata.csv", function (error, data) {

// *********** Convert flat data into a nice tree ***************
// create a name: node map
    var dataMap = data.reduce(function (map, node) {
        map[node.name] = node;
        return map;
    }, {});

// create the tree array
    var treeData = [];
    data.forEach(function (node) {
        // add to parent
        var parent = dataMap[node.parent];
        if (parent) {
            // create child array if it doesn't exist
            (parent.children || (parent.children = []))
                // add node to child array
                .push(node);
        } else {
            // parent is null or missing
            treeData.push(node);
        }
    });

    root = treeData[0];
    update(root);
});

function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 180;
    });

    // Declare the nodesâ€¦
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

    // Enter the nodes.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    nodeEnter.append("circle")
        .attr("r", 10)
        .style("fill", "#fff");

    nodeEnter.append("text")
        .attr("x", function (d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function (d) {
            return d.name;
        })
        .style("fill-opacity", 1);

    // Declare the linksâ€¦
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
            return d.target.id;
        });

    // Enter the links.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", diagonal);

}


/*

 // Set the dimensions of the canvas / graph
 var margin = {top: 30, right: 20, bottom: 30, left: 50},
 width = 600 - margin.left - margin.right,
 height = 270 - margin.top - margin.bottom;

 // Parse the date / time
 var parseDate = d3.time.format("%d-%b-%y").parse;

 // Set the ranges
 var x = d3.time.scale().range([0, width]);
 var y = d3.scale.linear().range([height, 0]);

 // Define the axes
 var xAxis = d3.svg.axis().scale(x)
 .orient("bottom").ticks(5);

 var yAxis = d3.svg.axis().scale(y)
 .orient("left").ticks(5);

 // Define the line
 var valueline = d3.svg.line()
 .x(function(d) { return x(d.date); })
 .y(function(d) { return y(d.close); });

 // Adds the svg canvas
 var svg = d3.select("body")
 .append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom)
 .append("g")
 .attr("transform",
 "translate(" + margin.left + "," + margin.top + ")");

 // Get the data
 d3.csv("data.csv", function(error, data) {
 data.forEach(function(d) {
 d.date = parseDate(d.date);
 d.close = +d.close;
 });

 // Scale the range of the data
 x.domain(d3.extent(data, function(d) { return d.date; }));
 y.domain([0, d3.max(data, function(d) { return d.close; })]);

 // Add the valueline path.
 svg.append("path")
 .attr("class", "line")
 .attr("d", valueline(data));

 // Add the X Axis
 svg.append("g")
 .attr("class", "x axis")
 .attr("transform", "translate(0," + height + ")")
 .call(xAxis);

 // Add the Y Axis
 svg.append("g")
 .attr("class", "y axis")
 .call(yAxis);
 });
 */
