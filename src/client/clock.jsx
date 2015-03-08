/**
 * Created by terjeeithun on 08/03/15.
 */

var React = require("react");

var ClockGui = React.createClass({

    getInitialState() {
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

    componentWillUnmount() {
      clearInterval(this.timer);
    },

    render: function () {
        var fDate = this.formatDate(this.state.date);
        return (
            <div className="clock">
                <h3>Clock</h3>
                <p>This is a simple React clock component</p>
                <p>Time: <span className="time">{"" + fDate}</span></p>
            </div>
        );
    }
});

var Clock = React.createClass({
    render: function() {
        return (
            <div>
                <ClockGui />
            </div>
        );
    }
});

module.exports = Clock;