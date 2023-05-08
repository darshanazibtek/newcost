import React from "react";
import { Link } from "react-router-dom";
import "./Sucess.css";

const Sucess = () => {
    return (
        <div>
            <div className="backdroptwo" />
            <div className="form-modaltwo">
                <button className="close-button">x</button>
                <h3 className="success-header">Success</h3>
                <div className="btn-tryagain">
                    <Link to="/">
                        <button className="button-tryagain">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sucess;
