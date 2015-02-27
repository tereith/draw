(function () {
    "use strict"
    
    console.log("Hello react");
    
    var hello = React.createClass({
        render: function() {
            return React.DOM.div({}, "Hello " + this.props.name);
        }
    });
    
    React.renderComponent(hello({name: "React component..."}), document.getElementById("test"));
    
})();
