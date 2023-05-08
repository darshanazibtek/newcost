import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/SuperAdminLogin.css";
import { useData } from "../Context/DataContext";
import SuperAdminLoginNav from "./SuperAdminLoginNav";

const schema = Yup.object().shape({
    emailAddress: Yup.string()
        .required("Please enter Vaild Email")
        .email("Invalid email address"),
    Password: Yup.string()
        .required("Please enter Vaild Password")
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
});

const SuperAdminLogin = ({ onPersonDetailSubmit }) => {
    const { data, setValues, calculations } = useData();
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: data,
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const [formOneData, setData] = useState({});
    const [submitted, SetSubmitted] = useState(false);

    function onSubmitHandler(data) {
        setValues(data);
        onPersonDetailSubmit(data);
        navigate("/singleFamilyPropertyDetails");
    }

    return (
        <div>
            <SuperAdminLoginNav />
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="super-form"
            >
                <div className="form-group-super">
                    <label htmlFor="first-name" className="label-txt-super">
                        Email Address
                    </label>
                    <input
                        className="input-super"
                        type="text"
                        id="emailAddress"
                        name="emailAddress"
                        {...register("emailAddress", { required: true })}
                    />
                    {errors.emailAddress && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.emailAddress.message}
                        </p>
                    )}
                </div>
                <div className="form-group-super">
                    <label htmlFor="lastName" className="label-txt-super">
                        Password
                    </label>
                    <input
                        className="input-super"
                        type="text"
                        id="last-name"
                        name="Password"
                        {...register("Password", { required: true })}
                    />
                    {errors.Password && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.Password.message}
                        </p>
                    )}
                </div>

                <div className="btn-super">
                    <button type="submit" className="button-super">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SuperAdminLogin;
