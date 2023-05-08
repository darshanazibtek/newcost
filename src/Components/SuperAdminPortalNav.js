import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheet/Navbar.css";

const SuperAdminPortalNav = () => {
    return (
        <div className="nav">
            <Link to="/" className="my-link">
                <p className="left-item"> LOGO</p>
            </Link>
            <div className="right-items">
                <div className="nav-help">Sign Out</div>
            </div>
        </div>
    );
};

export default SuperAdminPortalNav;
