import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheet/Navbar.css";

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" className="my-link">
                <p className="left-item"> LOGO</p>
            </Link>
            <div className="right-items">
                <div className="nav-help">What is My CostSeg?</div>
                <div className="nav-help">Ask a question</div>
            </div>
        </div>
    );
};

export default Navbar;
