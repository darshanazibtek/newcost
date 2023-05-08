import { Link } from "react-router-dom";
import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ closemodals }) => {
    return (
        <div>
            <div className="backdrop-error" />
            <div className="form-modal-error">
                <button className="close-button" onClick={closemodals}>
                    x
                </button>
                <h3 className="error-head">Error could not process payment</h3>
                <div className="btn-tryagain">
                    <button className="button-tryagain" onClick={closemodals}>
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;
