import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink exact className="nav-bar-link" to="/">
                Piano
            </NavLink>
        </div>
    )
}

NavBar.propTypes = {
    prop1: PropTypes.any
}


export default NavBar;