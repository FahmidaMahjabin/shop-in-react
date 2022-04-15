import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (

        <nav>
            <h1>Shop In</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/logIn">LohIn</Link>
            </div>

        </nav>

    );
};

export default Header;