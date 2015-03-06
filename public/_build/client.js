/**
 * Created by teithun on 06.03.2015.
 */

console.log("Hello client js.... react-router stuff goes here?")

var Router = require("react-router");
/*var Router = ReactRouter;*/

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({displayName: "App",
    render: function () {
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "top-nav"}, 
                    React.createElement("a", {href: "/", className: "topmenu-link"}, "home")
                ), 
                React.createElement("header", null, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement(Link, {to: "app"}, "Dashboard")), 
                        React.createElement("li", null, "Foo"), 
                        React.createElement("li", null, "Bar")
                    ), 
                    "Logged in as Jane"
                ), 

        /* this is the important part */
                React.createElement(RouteHandler, null)
            )
        );
    }
});

var routes = (
    React.createElement(Route, {name: "app", path: "/", handler: App}

    )
);

Router.run(routes, function (Handler) {
    //React.render(<Handler/>, document.getElementById("react-test"));
    React.render(React.createElement(Handler, null), document.body);
});
