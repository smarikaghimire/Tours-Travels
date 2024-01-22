import React from 'react'
import { Link } from 'react-router-dom';
const HeaderLogo = () => {
    return (




        <header className='header'>
            <div id="menu-bar" className="fas fa-bars"></div>
            <Link to="/">
                <div className="logocheckout"><span>T</span>ravel</div>
            </Link>
        </header>


    )
}

export default HeaderLogo
