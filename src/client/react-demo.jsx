(function () {
    var React = require("react");

    var ProductCategoryRow = React.createClass({
        render: function() {
            return (<tr><th colSpan="2">{this.props.category}</th></tr>);
        }
    });


    var ProductRow = React.createClass({
        render: function() {
            var name = this.props.product.stocked ?
                this.props.product.brand + " " + this.props.product.model :
                <span style={{color: 'red'}}>
                {this.props.product.brand + " " + this.props.product.model}
                </span>;
            return (
                <tr>
                    <td>{name}</td>
                    <td>{this.props.product.price}</td>
                </tr>
            );
        }
    });

    var ProductTable = React.createClass({
        render: function() {
            console.log(this.props);
            var rows = [];
            var lastCategory = null;
            
            this.props.products.forEach(function(product) {
                if (product.brand.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
                }
                rows.push(<ProductRow product={product} key={product.model} />);
                lastCategory = product.category;
            }.bind(this));
            
            return (
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            );
        }
    });

    var SearchBar = React.createClass({
        handleChange: function() {
            this.props.onUserInput(
                this.refs.filterTextInput.getDOMNode().value,
                this.refs.inStockOnlyInput.getDOMNode().checked
            );
        },
        
        render: function() {
            return (
                <form>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search..."
                            value={this.props.filterText}
                            ref="filterTextInput"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox"
                                checked={this.props.inStockOnly}
                                ref="inStockOnlyInput"
                                onChange={this.handleChange}
                            /> Only show products in stock
                        </label>
                    </div>
                </form>
            );
        }
    });

    var FilterableProductTable = React.createClass({
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
                <div>
                    <SearchBar 
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        onUserInput={this.handleUserInput} 
                    />
                    <ProductTable 
                        products={this.props.products}
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                    />
                </div>
            );
        }
    });


    var ReactDemo = React.createClass({
        render: function() {
            return (
                <div>
                    <FilterableProductTable products={fakeDB} />
                </div>
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
