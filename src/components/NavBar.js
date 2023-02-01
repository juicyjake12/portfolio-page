import '../components/NavBarStyles.css';
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
        <div className='Header'>
            <Link to='/'>
                <h1>Portfolio</h1>
            </Link>
            <ul className='nav-menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='./Project'>Project</Link>
                </li>
                <li>
                    <Link to='./About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>





        </div>
    )
}

export default NavBar
