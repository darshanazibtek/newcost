import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/PersoanlData.css";
import { useData } from "../Context/DataContext";
import * as emailValidator from "email-validator";

const schema = Yup.object().shape({
    firstName: Yup.string("First name must be String")
        .required("First name is required")
        .max(50, "First name must be at most 50 characters")
        .matches(
            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            "Invalid first name"
        )
        .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
        .required("Last name is required")

        .max(50, "Last name must be at most 50 characters")
        .matches(
            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            "Invalid first name"
        ),
    email: Yup.string()
        .required("Please enter  Email")
        .email("Invalid email address")
        .test("is-email-valid", "Email is invalid", function (value) {
            return emailValidator.validate(value);
        }),
});

const PersonalDataOne = ({ onPersonDetailSubmit }) => {
    const { data, setValues, calculations } = useData();
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: data,
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const [formOneData, setData] = useState({});
    const [submitted, SetSubmitted] = useState(false);

    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    function onSubmitHandler(data) {
        setValues(data);
        onPersonDetailSubmit(data);
        navigate("/singleFamilyPropertyDetails");
    }

    return (
        <div>
            <h3 className="first-head">Tell us about yourself</h3>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="personal-form"
            >
                <div className="form-group-one">
                    <label htmlFor="first-name" className="label-txt-one">
                        First Name
                    </label>
                    <input
                        className="input-one"
                        type="text"
                        id="first-name"
                        name="firstName"
                        {...register("firstName", { required: true })}
                    />
                    <div className="error-div">
                        {errors.firstName && (
                            <p className="one-error">
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="form-group-one">
                    <label htmlFor="lastName" className="label-txt-one">
                        Last Name
                    </label>
                    <input
                        className="input-one"
                        type="text"
                        id="last-name"
                        name="lastName"
                        {...register("lastName", { required: true })}
                    />
                    <div className="error-div">
                        {errors.lastName && (
                            <p className="one-error">
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="form-group-one">
                    <label htmlFor="email" className="label-txt-one">
                        Email Address
                    </label>
                    <input
                        className="input-one"
                        type="email"
                        id="email"
                        name="email"
                        {...register("email", { required: true })}
                    />
                    <div className="error-div">
                        {errors.email && (
                            <p className="one-error">{errors.email.message}</p>
                        )}
                    </div>
                    <p style={{ fontSize: "14px" }}>
                        * This where we will send the cost segregation report
                    </p>
                </div>
                <div className="btn-one">
                    <Link to="/" className="my-link">
                        <button className="button-one">Cancel</button>
                    </Link>

                    <button type="submit" className="button-one">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalDataOne;
