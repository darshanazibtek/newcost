import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheet/Navbar.css";

const SuperAdminLoginNav = () => {
    return (
        <div className="nav">
            <Link to="/" className="my-link">
                <p className="left-item"> LOGO</p>
            </Link>
        </div>
    );
};

export default SuperAdminLoginNav;
