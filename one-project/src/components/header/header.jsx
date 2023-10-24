import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="title">
            <nav className="nav">
                <a href="/"  className="nav_first" >Account</a>
                <a href="/" className="nav_second">Payments methods</a>
            </nav>
            <h1 className="head_title">Choose your payment method</h1>
        </div>
    )
}
export default Header;