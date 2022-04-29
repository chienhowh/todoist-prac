import React from 'react'
import { BsSunrise } from "react-icons/bs";
function Header() {
    return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <img src="" alt="" />
                </div>
                <ul className='settings'>
                    <li>+</li>
                    <li><BsSunrise /></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header