import types from './types';
import axios from 'axios';
import { withAuth } from '../helpers';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const addItemToCart = (productID, quantity) => async dispatch => {
        try{
            const resp = await axios.post(BASE_URL + `/api/cart/items/${productID}`,{
                quantity: quantity
            },
                withAuth()
            );

            console.log('Add Item Resp:', resp);
        } catch(err){
            console.log('Error adding item to cart');
        }
}


//send auth headers with all requests for cart

// delete /api/cart/:cartId Delete cart and all items in it.
// delete /api/cart/items/:itemId Delete that item from the cart, regardless of qty

//patch request to /api/cart/:itemId, { quantity: 2} this will increase the quantity by 2, use negatives to decrease
//(look in console.log of the cart)
//put /api/cart/:itemId, { quantity: 4} set that item qty to 4.



export const getCart = () => async dispatch => {
    try {
        const resp = await axios.get(BASE_URL + `/api/cart`, withAuth())

        console.log('Get Cart Resp:', resp);

    } catch(err){
        console.log('Error getting cart:', err);
    }
}

export const getAllProducts = () => async dispatch => {
    try {
        
        const {data: {products}} = await axios.get(BASE_URL + '/api/products')

    dispatch({
        type: types.GET_ALL_PRODUCTS,
        products: products
    });

    } catch(err){
        console.log('Get product list error:', err);

        //TODO: dispatch an error for failed products request
    }
} 

export const getProductDetails = (productID) => async dispatch => {
    try {
        const { data: {product}} = await axios.get(`${BASE_URL}/api/products/${productID}`)
        
        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: product
        })
        
    } catch(err){
        console.log('Error Getting product details', err)
    }
    //TODO: dipatch an error for failed product details request
}