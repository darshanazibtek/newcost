import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheet/Landing.css";

const Landing = () => {
    return (
        <Link to="/Personalinformation" className="my-link">
            <div className="landing-btn">
                <button className="custom-btn">Get Started</button>
            </div>
        </Link>
    );
};
export default Landing;
