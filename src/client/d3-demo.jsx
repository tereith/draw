/**
 * Created by terjeeithun on 08/03/15.
 */

var React = require("react");
var d3 = require("d3");

var D3Demo = React.createClass({

    componentDidMount: function() {
        return getSvg();
    },

    render: function() {
        return (
            <div>
                <h1>D3 Demo</h1>
                <div className="svg"></div>
            </div>
        );
    }
});

var getSvg = function() {
    return {
        svg: d3.select(".svg").append("svg:svg").attr("width", 960).attr("height", 500)
    }
};

module.exports = D3Demo;

