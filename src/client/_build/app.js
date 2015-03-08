/**
 * Created by teithun on 06.03.2015.
 */

var React = require("react");
var Router = require("react-router");
var ReactDemo = require("./react-demo");
var D3Demo = require("./d3-demo");
var About = require("./about");
var Clock = require("./clock");

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({displayName: "App",
    render: function () {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("header", null, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement(Link, {to: "app"}, "home")), 
                        React.createElement("li", null, React.createElement(Link, {to: "about"}, "about")), 
                        React.createElement("li", null, "bar")
                    )
                ), 

        /* this is the important part */
                React.createElement(RouteHandler, null)
            )
        );
    }
});

var Home = React.createClass({displayName: "Home",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {id: "test"}), 
                React.createElement("div", null, 
                    React.createElement("h1", null, "Hello React JS"), 
                    React.createElement("div", {className: "teaser-box"}, 
                        React.createElement(Link, {to: "d3"}, "d3-demo")
                    ), 
                    React.createElement("div", {className: "teaser-box"}, 
                        React.createElement(Link, {to: "react"}, "react-demo")
                    ), 
                    React.createElement("div", {className: "teaser-box"}, 
                        React.createElement("a", {href: "/map", className: "topmenu-link"}, "map")
                    ), 
                    React.createElement(Clock, null)
                ), 

                React.createElement(RouteHandler, null)
            )
        );
    }
});

var routes = (
    React.createElement(Route, {name: "app", path: "/", handler: App}, 
        React.createElement(DefaultRoute, {handler: Home}), 
        React.createElement(Route, {name: "about", handler: About}), 
        React.createElement(Route, {name: "react", handler: ReactDemo}), 
        React.createElement(Route, {name: "d3", handler: D3Demo})
    )
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
});
