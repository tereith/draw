/**
 * Created by terjeeithun on 08/03/15.
 */

var React = require("react");

var AboutGui = React.createClass({

    render: function () {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
});

var About = React.createClass({
    render: function () {
        return (
            <div>
                <AboutGui />
            </div>
        );
    }
});

module.exports = About;