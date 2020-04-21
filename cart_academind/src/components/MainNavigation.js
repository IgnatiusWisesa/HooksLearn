import React from 'react';
import './MainNavigation.css';
import { NavLink } from 'react-router-dom'

const mainNavigation = props => {
    return(
        <header className="main-navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            Cart (2)
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default mainNavigation