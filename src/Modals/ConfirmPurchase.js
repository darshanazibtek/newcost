import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ConfirmPurchase.css";
import Stripe from "stripe";
import Sucess from "./Sucess";
import ErrorMessage from "./ErrorMessage";
const stripe = new Stripe("your_api_key_here");

const schema = Yup.object({
    confirmMailAddress: Yup.string()
        .email("please enter vaild mail")
        .required("Please confirm mail address"),
    cardNumber: Yup.string()
        .required("Card number is required")
        .matches(/^\d{16}$/, "Card number must be 16 digits"),
    expDate: Yup.string()
        .required("Expiration date is required")
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiration date"),
    cvv: Yup.string()
        .required("CVV is required")
        .typeError("enter Vaild numbers")
        .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits number"),
});

const ConfirmPurchase = ({ closeModal }) => {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const onSubmitHandler = async data => {
        try {
            setSubmitting(true);

            const { cardNumber, expDate, cvv, confirmMailAddress } = data;

            const { token } = await stripe.tokens.create({
                card: {
                    number: cardNumber,
                    exp_month: expDate.slice(0, 2),
                    exp_year: expDate.slice(3),
                    cvv: cvv,
                },
            });

            // Send the token to your server for processing
            // For example:
            const response = await fetch("/api/charge", {
                method: "POST",
                body: JSON.stringify({ token }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            console.log(data);

            alert("Payment submitted successfully!");
        } catch (error) {
            console.error(error);
            setError(true);

            //alert("An error occurred. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    const closemodals = () => {
        setError(false);
        closeModal();
    };

    return (
        <div>
            {error && <ErrorMessage closemodals={closemodals} />}
            <div className="backdrop" onClick={closeModal} />
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="form-modal"
            >
                <h3
                    style={{
                        color: "grey",
                        padding: "5px",
                        textAlign: "center",
                    }}
                >
                    Confirm Purchase
                </h3>
                <div className="form-group-confirm">
                    <label
                        htmlFor="confirmMailAddress"
                        className="label-txt-confirm"
                    >
                        Confirm Email Address
                    </label>
                    <input
                        className="input-confirm"
                        type="text"
                        id="confirmMailAddress"
                        name="confirmMailAddress"
                        {...register("confirmMailAddress", { required: true })}
                    />
                    {errors.confirmMailAddress && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.confirmMailAddress.message}
                        </p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="cardNumber" className="label-txt-confirm">
                        Card Number
                    </label>
                    <input
                        className="input-confirm"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        {...register("cardNumber", { required: true })}
                    />

                    {errors.cardNumber && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.cardNumber.message}
                        </p>
                    )}
                </div>

                <div className="two-line">
                    <div className="margin">
                        <label htmlFor="expDate" className="label-txt-aln">
                            Expiry Date
                        </label>
                        <input
                            className="input-confirm"
                            type="text"
                            id="expDate"
                            name="expDate"
                            {...register("expDate", { required: true })}
                        />
                        {errors.expDate && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: "12px",
                                    marginBottom: "1px",
                                }}
                            >
                                {errors.expDate.message}
                            </p>
                        )}
                    </div>

                    <div style={{ marginLeft: "2px" }}>
                        <label htmlFor="cvv" className="label-txt-aln">
                            CVV
                        </label>
                        <input
                            className="input-confirm"
                            type="text"
                            id="cvv"
                            name="cvv"
                            {...register("cvv", {
                                required: true,
                            })}
                        />
                        {errors.cvv && (
                            <p
                                style={{
                                    color: "red",
                                    fontSize: "12px",
                                    marginBottom: "1px",
                                }}
                            >
                                {errors.cvv.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="btn-confirm">
                    <button onClick={closeModal} className="button-confirm">
                        Cancel
                    </button>

                    <button type="submit" className="button-confirm">
                        Purchase Report
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ConfirmPurchase;
