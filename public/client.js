var w = 960,
    h = 500;

var force = d3.layout.force()
    .charge(-220)
    .linkDistance(130)
    .size([w, h]);

var svg = d3.select("#svg").append("svg:svg")
    .attr("width", w)
    .attr("height", h);