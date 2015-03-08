/**
 * Created by terjeeithun on 08/03/15.
 */

var React = require("react");
var d3 = require("d3");

var D3Demo = React.createClass({displayName: "D3Demo",

    componentDidMount:function() {
        return getSvg();
    },

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "D3 Demo"), 
                React.createElement("div", {className: "svg"})
            )
        );
    }
});

var getSvg = function() {

    return {
        svg: d3.select(".svg").append("svg:svg").attr("width", 960).attr("height", 500)
    }
};

module.exports = D3Demo;

