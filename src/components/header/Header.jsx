import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router';
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
                <Link to="/posts">Posts</Link>
                <NavLink to="/comments">Comments</NavLink>
            </nav>
        </div>
    );
};

export default Header;