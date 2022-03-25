import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div>
                        <img className="navbar-brand" alt = "logo" src={logo}></img>
                    </div>
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Order</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Order Review</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " href="#">Order Management</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
            </nav>
        </div>
        
    );
};

export default Header;