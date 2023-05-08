import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import SelectUSState from "react-select-us-states";
import { useData } from "../Context/DataContext";
import "../Stylesheet/SingleFamPropertyDetail.css";

const schema = Yup.object({
    streetAddress: Yup.string()
        .required("Please enter Street Address")
        .typeError("Please enter valid street address"),
    city: Yup.string()
        .required("Please enter City Name")
        .typeError("Please enter valid City"),
    country: Yup.string()
        .required("Please enter Country")
        .typeError("Please enter Valid country"),
    zipcode: Yup.number()
        .required("Please enter Vaild Email")
        .typeError("Please enter vaild Zipcode"),
    purchaseDate: Yup.date()
        .required("please enter Date")
        .typeError("Please enter valid Date"),
    purchasePrice: Yup.number()
        .min(
            10000,
            value =>
                `The purchase price you have entered ${value.value} is less/greater than our customers normally input. Please check the purchase price input`
        )
        .max(
            1000000,
            "The purchase price you have entered is less/greater than our customers normally input. Please check the purchase price input"
        )
        .required("Please enter Purchase Price")
        .typeError("Please enter valid Price"),
    HomeSqFt: Yup.number()
        .min(
            400,
            "The purchase price you have entered is less/greater than our customers normally input. Please check the purchase price input"
        )
        .max(
            5000,
            "The purchase price you have entered is less/greater than our customers normally input. Please check the purchase price input"
        )
        .required("Please enter Home Sqft")
        .typeError("Please enter valid Home Sqft"),
    LandValue: Yup.number()
        .min(
            1000,
            "The land value you have entered [customer input] is less/greater than our customers normally input. Please check the land value input"
        )
        .max(
            20000,
            "The land value you have entered [customer input] is less/greater than our customers normally input. Please check the land value input"
        )
        .required("Please enter Land Valve")
        .typeError("Please enter valid Land value"),
    LandSquareFootage: Yup.number()
        .required("Please enter Land Square Footage")
        .typeError("Please enter valid Land Square Footage"),
    state: Yup.string().required("This field is required"),
});

const SingleFamPropertyDetail = () => {
    const { data, setValues } = useData();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: data,
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const [submitted, SetSubmitted] = useState(false);

    const onSubmission = data => {
        setValues(data);
        console.log(data);
        SetSubmitted(true);

        navigate("/singleFamPropertyDetailFive");
    };

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h3 className="head-two">
                    Tell us a little more about your property
                </h3>
                <p className="head-two"> (1 of 2)</p>
            </div>
            <form onSubmit={handleSubmit(onSubmission)} className="form-two">
                <div className="form-groupSingle">
                    <label htmlFor="street-address" className="label-txt-two">
                        Street Address
                    </label>
                    <input
                        className="input-two"
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        {...register("streetAddress", { required: true })}
                    />
                    <div className="error-div">
                        {errors.streetAddress && (
                            <p className="two-error">
                                {errors.streetAddress.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="form-groupSingle">
                    <label htmlFor="city" className="label-txt-two">
                        City
                    </label>
                    <input
                        className="input-two"
                        type="text"
                        id="city"
                        name="city"
                        {...register("city", { required: true })}
                    />
                    <div className="error-div">
                        {errors.city && (
                            <p className="two-error">{errors.city.message}</p>
                        )}
                    </div>
                </div>
                <div className="form-groupSingle">
                    <div>
                        <label htmlFor="state" className="label-txt-two">
                            State:
                        </label>
                        <Controller
                            name="state"
                            control={control}
                            render={({ field }) => (
                                <SelectUSState
                                    {...field}
                                    id="state"
                                    name="state"
                                    className="state-input"
                                />
                            )}
                            rules={{ required: true }}
                            validate={async value => {
                                try {
                                    await schema.validate({
                                        state: value,
                                    });
                                    return true;
                                } catch (err) {
                                    return err.message;
                                }
                            }}
                        />
                        <div className="error-div">
                            {errors.state && (
                                <p className="two-error">
                                    {errors.state.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="form-groupSingle">
                    <label htmlFor="state" className="label-txt-two">
                        country
                    </label>
                    <input
                        className="input-two"
                        type="text"
                        id="country"
                        name="country"
                        {...register("country", { required: true })}
                    />{" "}
                    <div className="error-div">
                        {errors.country && (
                            <p className="two-error">
                                {errors.country.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="form-groupSingle">
                    <label htmlFor="zipCode" className="label-txt-two">
                        zipCode
                    </label>
                    <input
                        className="input-two"
                        type="number"
                        id="zipcode"
                        name="zipcode"
                        {...register("zipcode", { required: true })}
                    />{" "}
                    <div className="error-div">
                        {errors.zipcode && (
                            <p className="two-error">
                                {errors.zipcode.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="line-split">
                    <div>
                        <label htmlFor="purchaseDate" className="label-txt-two">
                            Purchase date
                        </label>
                        <input
                            style={{ width: "100%" }}
                            placeholder="none"
                            className="input-two-line"
                            type="date"
                            id="purchaseDate"
                            name="purchaseDate"
                            {...register("purchaseDate", { required: true })}
                        />{" "}
                        <div className="error-div">
                            {errors.purchaseDate && (
                                <p className="two-error">
                                    {errors.purchaseDate.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="price-control">
                        <label
                            htmlFor="purchasePrice"
                            className="label-txt-two"
                        >
                            Purchase price
                        </label>
                        <div class="currency-wrap">
                            <span class="currency-code-detail">$</span>
                            <input
                                style={{ width: "80%" }}
                                className="text-currency"
                                type="text"
                                id="purchasePrice"
                                name="purchasePrice"
                                {...register("purchasePrice", {
                                    required: true,
                                    message:
                                        "Please enter valid LandSquare Footage",
                                })}
                            />{" "}
                            <div className="error-div">
                                {errors.purchasePrice && (
                                    <p className="two-error">
                                        {errors.purchasePrice.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-groupSingle">
                    <label htmlFor="HomeSqFt" className="label-txt-two">
                        Home SquareFootage
                    </label>
                    <input
                        className="input-two"
                        style={{ width: "40%" }}
                        type="number"
                        id="HomeSqFt"
                        name="HomeSqFt"
                        {...register("HomeSqFt", { required: true })}
                    />{" "}
                    <div className="error-div">
                        {errors.HomeSqFt && (
                            <p className="two-error">
                                {errors.HomeSqFt.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="line-split">
                    <div className="margin-two">
                        <label htmlFor="LandValue" className="label-txt-two">
                            LandValue
                        </label>
                        <div class="currency-wrap-detail">
                            <span class="currency-code-detail">$</span>
                            <input
                                style={{ width: "80%" }}
                                className="text-currency-detail"
                                type="text"
                                id="LandValue"
                                name="LandValue"
                                {...register("LandValue", { required: true })}
                            />{" "}
                            <div className="error-div">
                                {errors.LandValue && (
                                    <p className="two-error">
                                        {errors.LandValue.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="LandSquareFootage"
                            className="label-txt-two"
                        >
                            Land Square Footage
                        </label>
                        <input
                            style={{ width: "50%" }}
                            className="input-two"
                            type="text"
                            id="LandSquareFootage"
                            name="LandSquareFootage"
                            {...register("LandSquareFootage", {
                                required: true,
                                message:
                                    "Please enter valid LandSquare Footage",
                            })}
                        />{" "}
                        <div className="error-div">
                            {errors.LandSquareFootage && (
                                <p className="two-error">
                                    {errors.LandSquareFootage.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="btn-two">
                    <button
                        className="button-two"
                        onClick={() => {
                            navigate("/Personalinformation");
                        }}
                    >
                        Return
                    </button>

                    <button className="button-two" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SingleFamPropertyDetail;
