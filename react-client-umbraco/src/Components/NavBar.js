import React from '../../node_modules/react'
import {NavLink} from '../../node_modules/react-router-dom'

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Contact book</a>
    <div>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><NavLink className="nav-link" activeClassName="activate" to="/">Home</NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to="employee">Employee</NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to="country">Country</NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to="company">Company</NavLink ></li>
        </ul>
    </div>
</nav>
)
       
export default NavBar;
