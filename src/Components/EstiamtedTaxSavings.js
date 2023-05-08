import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/EstimatedTaxSaving.css";
import ConfirmPurchase from "../Modals/ConfirmPurchase";
import { calculateFlooringCost } from "../Helpers/Helper";
import { useData } from "../Context/DataContext";
import ErrorBoundary from "./ErrorBoundary";
import ErrorMessage from "../Modals/ErrorMessage";

const EstimatedTaxSavings = ({ onPersonDetailSubmit }) => {
    const navigate = useNavigate();

    const [submitted, SetSubmitted] = useState(false);
    const [OpenModal, setModal] = useState(false);
    const [OpenPayError, setError] = useState(false);

    const { data, setValues } = useData();

    // console.log(`$${calculateFlooringCost(data)}`);

    //const taxSavings = calculateFlooringCost(data);
    let taxSavings = 0;
    if (data) {
        taxSavings = calculateFlooringCost(data);
    } else {
        return <div>Error: No data found.</div>;
    }

    const onSubmitHandler = data => {
        console.log(data);
        setModal(true);
        SetSubmitted(true);
    };

    const cancelModal = () => {
        setModal(!OpenModal);
    };

    return (
        <div>
            {OpenModal && (
                <ConfirmPurchase
                    closeModal={cancelModal}
                    OpenModal={OpenModal}
                />
            )}
            <div className="estimated-tax">
                <div className="tax-group">
                    <h3 className="tax-text">
                        Estimated tax depreciation after 1 Year
                    </h3>
                    <div className="tax-display">
                        <span className="dollar"> $</span>
                        {taxSavings}
                    </div>
                    <p className="para">
                        If you would like for us to email you a full report of
                        your cost savings, continue to purchase
                    </p>
                </div>

                <div className="btntax">
                    <button
                        className="buttontax"
                        onClick={() => {
                            navigate("/singleFamPropertyDetailFive");
                        }}
                    >
                        Return
                    </button>

                    <button onClick={onSubmitHandler} className="buttontax">
                        Purchase full report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EstimatedTaxSavings;
