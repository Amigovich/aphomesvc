import React from 'react';
import { NavLink } from 'react-router-dom';

const Header2 = () => {
    return (
        <header className="header2">
            <a className="left">Call Us: 612-208-7271</a>
            <NavLink to="/estimate" className="middle">
                Click Here to Get A Free Quote
            </NavLink>
            <a className="right">We Accept Credit Card</a>
        </header>
    );
}

export default Header2;
