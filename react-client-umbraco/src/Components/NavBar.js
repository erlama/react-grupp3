import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/home">Navbar</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><NavLink className="nav-link" to="/home">Home</NavLink></li>
                    <li className="nav-item active"><NavLink className="nav-link" to="#">Employee</NavLink></li>
                    <li className="nav-item active"><NavLink className="nav-link" to="#">Country</NavLink></li>
                    <li className="nav-item active"><NavLink className="nav-link" to="#">Company</NavLink ></li>
                </ul>
            </div>
            
        </nav>
    )
}
