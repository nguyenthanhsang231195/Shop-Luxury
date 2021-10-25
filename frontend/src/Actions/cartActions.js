import Axios from 'axios';
import { CART_ADD_ITEM } from '../Constants/cartConstants';

export const addToCart = (productId, quantity, color, size) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
        name: data.name,
        slug: data.slug,
        image: data.image_main,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        quantity,
        color,
        size,
        },
    }
);
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};