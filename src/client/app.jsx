/**
 * Created by teithun on 06.03.2015.
 */

var React = require("react");
var Router = require("react-router");
var ReactDemo = require("./react-demo.jsx");
var D3Demo = require("./d3-demo.jsx");
var About = require("./about.jsx");
var Clock = require("./clock.jsx");

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <header>
                    <ul>
                        <li><Link to="app">home</Link></li>
                        <li><Link to="about">about</Link></li>
                        <li>bar</li>
                    </ul>
                </header>

        {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
});

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <div id="test"></div>
                <div>
                    <h1>Hello React JS</h1>
                    <div className="teaser-box">
                        <Link to="d3">d3-demo</Link>
                    </div>
                    <div className="teaser-box">
                        <Link to="react">react-demo</Link>
                    </div>
                    <div className="teaser-box">
                        <a href="/map" className="topmenu-link">map</a>
                    </div>
                    <Clock />
                </div>

                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <NotFoundRoute handler={NotFound} />
        <DefaultRoute handler={Home}/>
        <Route name="about" handler={About}/>
        <Route name="react" handler={ReactDemo}/>
        <Route name="d3" handler={D3Demo}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
