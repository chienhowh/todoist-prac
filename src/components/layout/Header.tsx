import React from 'react'
import { BsSunrise } from "react-icons/bs";

function Header() {
    return (
        <header className="header">
            <nav>
                <div className='logo'>
                    <img src="" alt="" />
                </div>
                <div className="settings">
                    <ul >
                        <li className='settings__add'>+</li>
                        <li className='settings__darkmode'><BsSunrise /></li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header