import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <div className="nav-links">
                <Link to='/'>Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory"> Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;