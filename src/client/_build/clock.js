/**
 * Created by terjeeithun on 08/03/15.
 */

var React = require("react");

var ClockGui = React.createClass({displayName: "ClockGui",

    getInitialState:function() {
        return {date: new Date()};
    },

    componentDidMount: function() {
      this.timer = setInterval(this.update, 1000)
    },

    formatDate: function(date) {
        var hour = date.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hour + ":" + minutes + ":" + seconds;
    },

    update: function() {
      this.setState({date: new Date()});
    },

    componentWillUnmount:function() {
      clearInterval(this.timer);
    },

    render: function () {
        var fDate = this.formatDate(this.state.date);
        return (
            React.createElement("div", {className: "clock"}, 
                React.createElement("h3", null, "Clock"), 
                React.createElement("p", null, "This is a simple React clock component"), 
                React.createElement("p", null, "Time: ", React.createElement("span", {className: "time"}, "" + fDate))
            )
        );
    }
});

var Clock = React.createClass({displayName: "Clock",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(ClockGui, null)
            )
        );
    }
});

module.exports = Clock;