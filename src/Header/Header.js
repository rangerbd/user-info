import React from 'react';
import logo from '../image/istockphoto-1193083060-612x612.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='logo'>

            <img src={logo}></img>
            
            </div>

            <nav>
                <a href='#'>User'Info</a>
                <a href='#'>Home</a>
                <a href='#'>About</a>
            </nav>
            
        </div>
    );
};

export default Header;