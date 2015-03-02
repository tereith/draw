(function () {
    "use strict";

    console.log("Hello react");

    var HelloMessage = React.createClass({
        render: function() {
            return <div>Hello {this.props.name}</div>;
        }
    });


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
                {this.props.product.brand + this.props.product.model}
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
            var rows = [];
            var lastCategory = null;
            this.props.products.forEach(function(product) {
                if (product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
                }
                rows.push(<ProductRow product={product} key={product.brand + product.model} />);
                lastCategory = product.category;
            });
            return (
                <table>
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
        render: function() {
            return (
                <form>
                    <input type="text" placeholder="Search..." />
                    <p>
                        <input type="checkbox" />
                    {' '}
                        Only show products in stock
                    </p>
                </form>
            );
        }
    });

    var FilterableProductTable = React.createClass({
        render: function() {
            return (
                <div>
                    <SearchBar />
                    <ProductTable products={this.props.products} />
                </div>
            );
        }
    });

    var fakeDB = [
        {category: "skate", brand: "Madshus", model: "Terrasonic Skate", price: "kr.1924", stocked: false},
        {category: "skate", brand: "Fisher", model: "SC Skate Nis", price: "kr.1259", stocked: true},
        {category: "skate", brand: "Fisher", model: "Speedmax Skate", price: "kr.4496", stocked: true},
        {category: "skate", brand: "Salomon", model: "S-Lab Skate Warm Hard", price: "kr.2447", stocked: false},
        {category: "classic", brand: "Fisher", model: "Speedmax Cl", price: "kr.4995", stocked: true},
        {category: "classic", brand: "Madshus", model: "Nanosonic Carbon Classic Cold-2013", price: "kr.2097", stocked: false},
        {category: "classic", brand: "Madshus", model: "Nanosonic Carbon Classic Cold", price: "kr.3527", stocked: true},
        {category: "classic", brand: "Rossignol", model: "X-IUM Classic WCS-C2", price: "kr.2795", stocked: true},
        {category: "classic", brand: "Atomic", model: "Redster Marathon Classic Med", price: "kr.4049", stocked: false},
        {category: "classic", brand: "Salomon", model: "S-Lab Classic Warm Hard", price: "kr.4049", stocked: false}
    ];
    React.render(<HelloMessage name="React component.." />, document.getElementById('test2'));
    React.render(<FilterableProductTable products={fakeDB} />, document.getElementById('test'));
})();
