import React from 'react'
import { BsSunrise, BsSunset } from "react-icons/bs";

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}

function Header({ isDarkMode, setIsDarkMode }: Props) {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add">
                            <button
                                data-testid="quick-add-task-action"
                                aria-label="Quick add task"
                                type="button"
                            >
                                +
                            </button>
                        </li>
                        <li className="settings__darkmode">
                            <button
                                aria-label="Darkmode on/off"
                                type="button"
                                onClick={() => setIsDarkMode(!isDarkMode)}
                            >
                                {isDarkMode ? <BsSunrise /> : <BsSunset />}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>


        </header>
    )
}

export default Header