import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import formatCurrency from '../../util';
import './HomeScreen.css';
import LoadingBox from '../../Components/LoadingBox/LoadingBox';
import MessageBox from '../../Components/MessageBox/MessageBox';

export default function HomeScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getProducts = (count) => {
        const max = products.length - count
        const start = Math.floor(Math.random() * max)
        return products.slice(start, start + count)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }      
        };
        fetchData();
    }, []);

    return (
<>
{loading ? 
(<LoadingBox></LoadingBox>) : error ? 
(<MessageBox variant="danger"> {error} </MessageBox>) : (
    <div className="home-screen">
        <div className="best-seller-product">
            <div className="title-product">
                <h2> Sản phẩm bán chạy </h2>
            </div>

            <ul>
                {getProducts(4).map((product) => (
                <li key={product._id}>
                    <div className="box-product">
                        <Link to={`/product/${product.slug}`}>
                            <img className="product-image" src={product.image_main} alt={product.name} />
                        </Link>

                        <Link to={`/product/${product.slug}`}>
                            <h2 className="product-name"> {product.name} </h2>
                        </Link>
                        
                        <h3 className="product-price"> {formatCurrency(product.price)} </h3>
                    </div>
                </li>
                ))}
            </ul>
        </div>
                
        <div className="Banner-Change">
            <img src="/images/BannerSale.png" alt="" />
        </div>

        <div className="discount-product">
            <div className="title-product-discount">
                <span> Tưng bừng khai chương! Giá giảm kịch sàn </span>  
            </div>

            <ul>
            {getProducts(10).map((product) => (
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
                                {formatCurrency(product.price)}
                            </small>
                        </h3>
                    </div>
                </div>
            </li>
            ))}
            </ul>

            <div className="change-page">
                <Link to="/category" className="change-page-category">
                    <h1>
                        <span> Xem </span>
                        <span> Thêm </span>
                    </h1>
                </Link>
            </div>
        </div>
    </div>
)}
</>
    );
}

