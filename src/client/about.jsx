/**
 * Created by terjeeithun on 08/03/15.
 */

var React = require("react");

var AboutGui = React.createClass({

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
            <div>
                <h1>About</h1>
                <div className="clock">
                    <span>Time: {"" + fDate}</span>
                </div>
            </div>
        );
    }
});

var About = React.createClass({
    render: function() {
        return (
            <div>
                <AboutGui />
            </div>
        );
    }
});

module.exports = About;