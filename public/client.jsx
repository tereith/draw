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

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="top-nav">
                    <a href="/" className="topmenu-link">home</a>
                </div>
                <header>
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                        <li>Foo</li>
                        <li>Bar</li>
                    </ul>
                    Logged in as Jane
                </header>

        {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>

    </Route>
);

Router.run(routes, function (Handler) {
    //React.render(<Handler/>, document.getElementById("react-test"));
    React.render(<Handler/>, document.body);
});
