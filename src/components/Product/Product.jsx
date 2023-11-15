import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './Product.css';

const Product = (props) => {
    const { id, name, img, seller, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="ProductImage" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: $<span>{price}</span></h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add To Cart <FaCartPlus /></button>
        </div>
    );
};

export default Product;