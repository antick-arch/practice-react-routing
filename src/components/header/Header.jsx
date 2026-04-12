import React from 'react';
import './header.css';
import { Link } from 'react-router';
const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav className='headerStyle'>
                <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptops">Laptops</Link>
                <Link to="/user1">User1</Link>
                <Link to="/user2">User2</Link>
            </nav>
        </div>
    );
};

export default Header;