import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { IoBagCheckOutline } from "react-icons/io5";
const Order = () => {
    //load all products 
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleDeleteItem = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    function handleClearCart() {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='cart-products'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleDeleteItem={handleDeleteItem}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to='/checkout'><button className='btn-procced'>Procced Checkout <span><IoBagCheckOutline /></span></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;