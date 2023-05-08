import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "../Stylesheet/PropertyTypeSelection.css";

const PropertyTypeSelection = ({ FormOnesubmitted }) => {
    const navigate = useNavigate();

    if (!FormOnesubmitted) {
        return <Navigate to="/page" />;
    }

    const SingleFamilyNav = () => {
        navigate("/singleFamilyPropertyDetails");
    };

    return (
        <div className="property-type">
            <h3
                style={{
                    color: "grey",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                what type of property type do you own
            </h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-column" onClick={SingleFamilyNav}>
                            Single-Family
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-column">Multi-Family</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyTypeSelection;
