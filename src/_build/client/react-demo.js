(function () {
    "use strict";
    var React = require("react");

    var ProductCategoryRow = React.createClass({displayName: "ProductCategoryRow",
        render: function() {
            return (React.createElement("tr", null, React.createElement("th", {colSpan: "2"}, this.props.category)));
        }
    });

    var ProductRow = React.createClass({displayName: "ProductRow",
        render: function() {
            var name = this.props.product.stocked ?
                this.props.product.brand + " " + this.props.product.model :
                React.createElement("span", {style: {color: 'red'}}, 
                this.props.product.brand + " " + this.props.product.model
                );
            return (
                React.createElement("tr", null, 
                    React.createElement("td", null, name), 
                    React.createElement("td", null, this.props.product.price)
                )
            );
        }
    });

    var ProductTable = React.createClass({displayName: "ProductTable",
        render: function() {
            console.log(this.props);
            var rows = [];
            var lastCategory = null;
            
            this.props.products.forEach(function(product) {
                if (product.brand.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(React.createElement(ProductCategoryRow, {category: product.category, key: product.category}));
                }
                rows.push(React.createElement(ProductRow, {product: product, key: product.model}));
                lastCategory = product.category;
            }.bind(this));
            
            return (
                React.createElement("table", {className: "table table-condensed"}, 
                    React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "Name"), 
                            React.createElement("th", null, "Price")
                        )
                    ), 
                    React.createElement("tbody", null, rows)
                )
            );
        }
    });

    var SearchBar = React.createClass({displayName: "SearchBar",
        handleChange: function() {
            this.props.onUserInput(
                this.refs.filterTextInput.getDOMNode().value,
                this.refs.inStockOnlyInput.getDOMNode().checked
            );
        },
        
        render: function() {
            return (
                React.createElement("form", null, 
                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {
                            type: "text", 
                            className: "form-control", 
                            placeholder: "Search...", 
                            value: this.props.filterText, 
                            ref: "filterTextInput", 
                            onChange: this.handleChange}
                        )
                    ), 
                    React.createElement("div", {className: "checkbox"}, 
                        React.createElement("label", null, 
                            React.createElement("input", {
                                type: "checkbox", 
                                checked: this.props.inStockOnly, 
                                ref: "inStockOnlyInput", 
                                onChange: this.handleChange}
                            ), " Only show products in stock"
                        )
                    )
                )
            );
        }
    });

    var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
        getInitialState : function() {
            return {
                filterText: "",
                inStockOnly: false            
            };
        },

        handleUserInput: function(filterText, inStockOnly) {
            this.setState({
                filterText: filterText,
                inStockOnly: inStockOnly
            });
        },
        
        render: function() {
            return (
                React.createElement("div", null, 
                    React.createElement(SearchBar, {
                        filterText: this.state.filterText, 
                        inStockOnly: this.state.inStockOnly, 
                        onUserInput: this.handleUserInput}
                    ), 
                    React.createElement(ProductTable, {
                        products: this.props.products, 
                        filterText: this.state.filterText, 
                        inStockOnly: this.state.inStockOnly}
                    )
                )
            );
        }
    });


    var ReactDemo = React.createClass({displayName: "ReactDemo",
        render: function() {
            return (
                React.createElement("div", null, 
                    React.createElement(FilterableProductTable, {products: fakeDB})
                )
            );
        }
    });

    var fakeDB = [
        {category: "skate", brand: "Madshus", model: "Terrasonic Skate", price: "kr.1924", stocked: false},
        {category: "skate", brand: "Fisher", model: "SC Skate Nis", price: "kr.1259", stocked: true},
        {category: "skate", brand: "Salomon", model: "S-Lab Skate Warm Hard", price: "kr.2447", stocked: false},
        {category: "skate", brand: "Fisher", model: "Speedmax Skate", price: "kr.4496", stocked: true},
        {category: "classic", brand: "Madshus", model: "Nanosonic Carbon Classic Cold", price: "kr.3527", stocked: true},
        {category: "classic", brand: "Fisher", model: "Speedmax Cl", price: "kr.4995", stocked: true},
        {category: "classic", brand: "Rossignol", model: "X-IUM Classic WCS-C2", price: "kr.2795", stocked: true},
        {category: "classic", brand: "Atomic", model: "Redster Marathon Classic Med", price: "kr.4049", stocked: false},
        {category: "classic", brand: "Madshus", model: "Nanosonic Carbon Classic Cold-2013", price: "kr.2097", stocked: false},
        {category: "classic", brand: "Salomon", model: "S-Lab Classic Warm Hard", price: "kr.4049", stocked: false}
    ];

    //React.render(<FilterableProductTable products={fakeDB} />, document.getElementById('test'));
    //React.render(<FilterableProductTable products={fakeDB} />, document.body);

    module.exports = ReactDemo;
})();
