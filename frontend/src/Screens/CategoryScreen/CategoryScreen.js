import React from 'react';
import Filter from '../../Components/Filter/Filter';
import Products from '../../Components/Product/Products';
import productData from '../../data';
import './CategoryScreen.css'

class CategoryScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            products: productData.getProducts(12),
            size: "",
            sort: "",
            color: "",
        };
    }

    sortProducts = (event) => {
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === "lowest" ? a.price > b.price ? 1 : -1
                    : sort === "highest" ? a.price < b.price ? 1 : -1
                    : a._id < b._id ? 1 : -1
                    ),
                }
            )
        );
    };

    filterProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value === "") {
            this.setState({ size: event.target.value, products: productData.getProducts(12) });
        } else {
            this.setState({
                size: event.target.value,
                products: productData.getProducts(12).filter(
                    (product) => product.size.indexOf(event.target.value) >= 0
                ),
            }
        );
    }};

    colorProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value === "") {
            this.setState({ color: event.target.value, products: productData.getProducts(12) });
        } else {
            this.setState({
                color: event.target.value,
                products: productData.getProducts(12).filter(
                    (product) => product.color.indexOf(event.target.value) >= 0
                ),
            }
        );
    }};

render() {
    return (
<div className="category-screen">
   <div className="filter-category">
        <Filter
            count={this.state.products.length}
            sort={this.state.sort}
            size={this.state.size}
            color={this.state.color}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
            colorProducts={this.colorProducts}>
        </Filter>
   </div>

   <div className="product-category">
        <Products products={this.state.products}></Products>
   </div>
</div>
        );
    }
}

export default CategoryScreen;