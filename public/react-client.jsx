(function () {
    "use strict"
    
    console.log("Hello react");


    var HelloMessage = React.createClass({
        render: function() {
            return <div>Hello {this.props.name}</div>;
        }
    });

    React.render(<HelloMessage name="React component........." />, document.getElementById('test'));
    
})();
