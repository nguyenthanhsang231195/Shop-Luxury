import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Actions/cartActions';
import formatCurrency from '../../util';
import './CartScreen.css';

export default function CartScreen(props) {
    const productId = props.match.params.slug;
    const quantity = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const total = cartItems.reduce((a, c) => a + c.quantity, 0);
    const total_value =  cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    const total_value_string = total_value.toLocaleString('de-DE');
    const point = Math.round(cartItems.reduce((a,c) => a + (c.price * c.quantity * 0.024) , 0));

    const removeFromCartHandler = (slug) => {
        // Xóa sản phẩm
        // dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        props.history.push('/login?redirect=vận-chuyển');
    };

    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity));
        }
    }, [dispatch, productId, quantity]);

  return (
<div className="cart-screen">

    <div className="cart-name">
        <div className="shadows">
            <span> G </span>
            <span> I </span>
            <span> Ỏ </span>
            <span> H </span>
            <span> À </span>
            <span> N </span>
            <span> G </span>
        </div>
    </div>

    <div className="cart-main">
        <table className="cart-table">
            <thead className="cart-table-first">
                <tr>
                    <th> Hình Ảnh </th>
                    <th> Tên Sản Phẩm </th>
                    <th> Giá </th>
                    <th> Số Lượng </th>
                    <th> Xóa </th>
                </tr>
            </thead>

        {cartItems.map((item) => (
            <tbody className="cart-table-second" key={item.product}>
                <tr>
                    <th>
                        <div className="cart-image">
                            <img src={item.image} alt={item.name} className="image-product-cart" />
                            <div className="color-product-cart">
                                <h3> Color: </h3>  
                            </div>
                            <div className="size-product-cart"> 
                                <h3> Size: </h3>      
                            </div> 
                        </div>
                    </th>

                    <th>
                        <div className="cart-name-th">
                            <h3> {item.name} </h3>
                        </div>
                    </th>

                    <th>
                        <div className="cart-price">
                            <h3> {formatCurrency(item.price)} </h3>  
                        </div> 
                    </th>

                    <th> 
                        <select className="input-quantity"
                            value={item.quantity}
                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))
                        }>
                            {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}> {x + 1} </option>
                            ))}
                        </select> 
                    </th>

                    <th>
                        <button type="button" className="button-delete" onClick={() => removeFromCartHandler(item.product)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </th>
                </tr>
            </tbody>
        ))}
        </table>
    </div>

    <div className="box-total-cart">
        <div className="box-name-total-cart">
            <h3> Tóm Tắt Đơn Hàng </h3>
        </div>
    
        <div className="total-cart">
            <ul>
                <li className="li-cart-1">
                    <p> Tổng số lượng: </p>
                    <p> {total} Sản phẩm </p>
                </li>

                <li className="li-cart-2">
                    <p> Giá trị đơn hàng: </p>
                    <p> {total_value_string}.000 Đ </p>
                </li>

                <li className="li-cart-3">
                    <p> Điểm thưởng tích lũy: </p>
                    <p> {point} Điểm ( 1 Điểm = 1.000 Đ) </p> 
                </li>

                <li className="li-cart-4">
                    <button
                        type="button"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                    >
                        Duyệt ngay
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
}

