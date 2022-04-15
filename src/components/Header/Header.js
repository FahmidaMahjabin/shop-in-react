import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import useUserInfo from '../../Hooks/useUserInfo';
import { signOut } from 'firebase/auth';
import auth from '../../init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log("user in header:", user)
    return (
        
        <nav>
            <h1>Shop In</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/order">Order</Link>
                <Link to = "/shipment">Shipment</Link>
                {user? <button onClick={() => {signOut(auth)}}>Log Out</button>
                :<Link to="/logIn">LogIn</Link>}
                
            </div>

        </nav>

    );
};

export default Header;