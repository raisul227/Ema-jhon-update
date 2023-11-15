import React from 'react';
import './ReviewItem.css';
import { RiDeleteBin6Line } from "react-icons/ri";

const ReviewItem = ({ product, handleDeleteItem }) => {
    const { id, img, name, price, shipping } = product
    return (
        <div className='items-container'>
            <div className='item-details'>
                <img src={img} alt="product" />
                <div>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Shipping Charge: ${shipping}</p>
                </div>
            </div>
            <button onClick={() => handleDeleteItem(id)} className='btn-delete'><span className='delete-icon'><RiDeleteBin6Line /></span></button>
        </div>
    );
};

export default ReviewItem;