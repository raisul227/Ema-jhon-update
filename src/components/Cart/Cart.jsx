import React from 'react';
import './Cart.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Cart = ({ cart, handleClearCart, children }) => {

    //calculate all types of price tax total
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    //calculate tax and grand total and set the value ;
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items:{quantity}</p>
            <p>Total-Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

            <button onClick={handleClearCart} className='clear-cart'>Clear Cart <span><RiDeleteBin6Line /></span></button>
            {children}
        </div>
    );
};


export default Cart;