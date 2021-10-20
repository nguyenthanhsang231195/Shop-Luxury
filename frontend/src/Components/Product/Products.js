import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from '../../util';
import './Products.css';

export default class Products extends Component {
render() {
    return (
<div className="discount-product">
    <ul>
        {this.props.products.map((product) => (
        <li key={product._id}>
            <div className="box-product">
                <Link to={`/product/${product.slug}`}>
                    <img className="product-discount-image" src={product.image_main} alt={product.name} />
                </Link>

                <Link to={`/product/${product.slug}`}>
                    <h2 className="product-discount-name"> {product.name} </h2>
                </Link>
                
                <div className="product-discount-sell">
                    <h3 className="product-discount-price"> 
                        {formatCurrency(product.price)}
                    </h3>
                    <h3 className="product-discount-price-sell"> 
                        <small>
                            {formatCurrency(product.pricesell)}
                        </small>
                    </h3>
                </div>
            </div>
        </li>
        ))}
    </ul>
</div>
        );
    }
}