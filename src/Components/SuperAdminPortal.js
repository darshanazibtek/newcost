import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Stylesheet/SuperAdminPortal.css";
import { useData } from "../Context/DataContext";
import SuperAdminPortalNav from "./SuperAdminPortalNav";

const schema = Yup.object().shape({
    PrimaryBedroomValue: Yup.number()
        .required("Please enter Primary BedRoom Value")
        .typeError("Please enter Vaild Primary BedRoom Value"),
    SubsequentBedroomValue: Yup.number()
        .required("Please enter Subsequent BedRoom Value")
        .typeError("Please enter Vaild Subsequent BedRoom Value"),
    PrimaryBathroomValue: Yup.number()
        .required("Please enter Primary BathRoom Value")
        .typeError("Please enter Vaild Primary BathRoom Value"),
    SubsequentBathroomValue: Yup.number()
        .required("Please enter Subsequent BathRoom Value")
        .typeError("Please enter Vaild Subsequent BathRoom Value"),
    CarpetFlooringValue: Yup.number()
        .required("Please enter Carpet flooring Value")
        .typeError("Please enter Vaild Carpet flooring Value"),
    VinylFlooringValue: Yup.number()
        .required("Please enter Vinyl flooring Value")
        .typeError("Please enter Vaild Vinyl flooring Value"),
    CeramicFlooringValue: Yup.number()
        .required("Please enter Ceramic flooring Value")
        .typeError("Please enter Vaild Ceramic flooring Value"),
    WoodFlooringValue: Yup.number()
        .required("Please enter Wood flooring Value")
        .typeError("Please enter Vaild Wood flooring Value"),
    RefrigeratorValue: Yup.number()
        .required("Please enter Refrigerator Value")
        .typeError("Please enter Vaild Refrigerator Value"),
    DishWasherValue: Yup.number()
        .required("Please enter DishWasher Value")
        .typeError("Please enter Vaild DishWasher Value"),
    KitchenSinkValue: Yup.number()
        .required("Please enter KitchenSink Value")
        .typeError("Please enter Vaild KitchenSink Value"),
    DisposerValue: Yup.number()
        .required("Please enter Disposer Value")
        .typeError("Please enter Vaild Disposer Value"),
    StoveRangeOvenValue: Yup.number()
        .required("Please enter StoveRangeOven Value")
        .typeError("Please enter Vaild StoveRangeOven Value"),
    ClothesWasherValue: Yup.number()
        .required("Please enter ClothesWasher Value")
        .typeError("Please enter Vaild ClothesWasher Value"),
    ClothesDryerValue: Yup.number()
        .required("Please enter ClothesDryer Value")
        .typeError("Please enter Vaild ClothesDryer Value"),
    KitchenCabinetValue: Yup.number()
        .required("Please enter  KitchenCabinet Value")
        .typeError("Please enter Vaild  KitchenCabinet Value"),
    EditingCounterTopvalue: Yup.number()
        .required("Please enter  CounterTop Value")
        .typeError("Please enter Vaild  CounterTop Value"),
});

const SuperAdminPortal = ({ onPersonDetailSubmit }) => {
    const { data, setValues } = useData();
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
        navigate("/dummy");
    }

    return (
        <div>
            <SuperAdminPortalNav />
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="portal-form"
            >
                <div className="form-top">
                    <div className="btn-portal">
                        <button type="submit" className="button-portal">
                            Update changes
                        </button>
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="PrimaryBedroomValue"
                        className="label-txt-portal"
                    >
                        Primary bedroom value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="PrimaryBedroomValue"
                            name="PrimaryBedroomValue"
                            {...register("PrimaryBedroomValue", {
                                required: true,
                            })}
                        />
                        {errors.PrimaryBedroomValue && (
                            <p className="portal-error">
                                {errors.PrimaryBedroomValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="PrimaryBedroomValue"
                        className="label-txt-portal"
                    >
                        Subsequent bedroom value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="SubsequentBedroomValue"
                            name="SubsequentBedroomValue"
                            {...register("SubsequentBedroomValue", {
                                required: true,
                            })}
                        />
                        {errors.SubsequentBedroomValue && (
                            <p className="portal-error">
                                {errors.SubsequentBedroomValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="PrimaryBedroomValue"
                        className="label-txt-portal"
                    >
                        Primary bathroom value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="PrimaryBathroomValue"
                            name="PrimaryBathroomValue"
                            {...register("PrimaryBathroomValue", {
                                required: true,
                            })}
                        />
                        {errors.PrimaryBathroomValue && (
                            <p className="portal-error">
                                {errors.PrimaryBathroomValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="SubsequentBathroomValue"
                        className="label-txt-portal"
                    >
                        Subsequent bathroom value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="SubsequentBathroomValue"
                            name="SubsequentBathroomValue"
                            {...register("SubsequentBathroomValue", {
                                required: true,
                            })}
                        />
                        {errors.SubsequentBathroomValue && (
                            <p className="portal-error">
                                {errors.SubsequentBathroomValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="CarpetFlooringValue"
                        className="label-txt-portal"
                    >
                        Carpet flooring value
                    </label>
                    <div class="currency-wrap-detail">
                        <span class="currency-code-detail">$</span>
                        <input
                            className="text-currency-detail"
                            type="number"
                            id="CarpetFlooringValue"
                            name="CarpetFlooringValue"
                            {...register("CarpetFlooringValue", {
                                required: true,
                            })}
                        />
                        {errors.CarpetFlooringValue && (
                            <p className="portal-error">
                                {errors.CarpetFlooringValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="VinylFlooringValue"
                        className="label-txt-portal"
                    >
                        Vinyl flooring value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="VinylFlooringValue"
                            name="VinylFlooringValue"
                            {...register("VinylFlooringValue", {
                                required: true,
                            })}
                        />
                        {errors.VinylFlooringValue && (
                            <p className="portal-error">
                                {errors.VinylFlooringValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="CeramicFlooringValue"
                        className="label-txt-portal"
                    >
                        Ceramic flooring value
                    </label>
                    <div class="currency-wrap-detail">
                        <span class="currency-code-detail">$</span>
                        <input
                            className="text-currency-detail"
                            type="number"
                            id="CeramicFlooringValue"
                            name="CeramicFlooringValue"
                            {...register("CeramicFlooringValue", {
                                required: true,
                            })}
                        />
                        {errors.CeramicFlooringValue && (
                            <p className="portal-error">
                                {errors.CeramicFlooringValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="WoodFlooringValue"
                        className="label-txt-portal"
                    >
                        Wood flooring value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="WoodFlooringValue"
                            name="WoodFlooringValue"
                            {...register("WoodFlooringValue", {
                                required: true,
                            })}
                        />
                        {errors.WoodFlooringValue && (
                            <p className="portal-error">
                                {errors.WoodFlooringValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="RefrigeratorValue"
                        className="label-txt-portal"
                    >
                        Refrigerator value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="RefrigeratorValue"
                            name="RefrigeratorValue"
                            {...register("RefrigeratorValue", {
                                required: true,
                            })}
                        />
                        {errors.RefrigeratorValue && (
                            <p className="portal-error">
                                {errors.RefrigeratorValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="DishWasherValue"
                        className="label-txt-portal"
                    >
                        DishWaher value
                    </label>
                    <div class="currency-wrap">
                        <span class="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="DishWasherValue"
                            name="DishWasherValue"
                            {...register("DishWasherValue", {
                                required: true,
                            })}
                        />
                        {errors.DishWasherValue && (
                            <p className="portal-error">
                                {errors.DishWasherValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="KitchenSinkValue"
                        className="label-txt-portal"
                    >
                        Kitchen sink value
                    </label>
                    <div className="currency-wrap">
                        <span className="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="KitchenSinkValue"
                            name="KitchenSinkValue"
                            {...register("KitchenSinkValue", {
                                required: true,
                            })}
                        />
                        {errors.KitchenSinkValue && (
                            <p className="portal-error">
                                {errors.KitchenSinkValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label htmlFor="DisposerValue" className="label-txt-portal">
                        Disposer value
                    </label>
                    <div className="currency-wrap">
                        <span className="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="DisposerValue"
                            name="DisposerValue"
                            {...register("DisposerValue", {
                                required: true,
                            })}
                        />
                        {errors.DisposerValue && (
                            <p className="portal-error">
                                {errors.DisposerValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="StoveRangeOvenValue"
                        className="label-txt-portal"
                    >
                        Stove/range/oven value
                    </label>
                    <div className="currency-wrap">
                        <span className="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="StoveRangeOvenValue"
                            name="StoveRangeOvenValue"
                            {...register("StoveRangeOvenValue", {
                                required: true,
                            })}
                        />
                        {errors.StoveRangeOvenValue && (
                            <p className="portal-error">
                                {errors.StoveRangeOvenValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="ClothesWasherValue"
                        className="label-txt-portal"
                    >
                        Clothes Washer value
                    </label>
                    <div className="currency-wrap">
                        <span className="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="ClothesWasherValue"
                            name="ClothesWasherValue"
                            {...register("ClothesWasherValue", {
                                required: true,
                            })}
                        />
                        {errors.ClothesWasherValue && (
                            <p className="portal-error">
                                {errors.ClothesWasherValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="ClothesDryerValue"
                        className="label-txt-portal"
                    >
                        Clothes Dryer value
                    </label>
                    <div className="currency-wrap">
                        <span className="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="ClothesDryerValue"
                            name="ClothesDryerValue"
                            {...register("ClothesDryerValue", {
                                required: true,
                            })}
                        />
                        {errors.ClothesDryerValue && (
                            <p className="portal-error">
                                {errors.ClothesDryerValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="KitchenCabinetValue"
                        className="label-txt-portal"
                    >
                        Kitchen Cabinate value
                    </label>
                    <div className="currency-wrap">
                        <span className="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="KitchenCabinetValue"
                            name="KitchenCabinetValue"
                            {...register("KitchenCabinetValue", {
                                required: true,
                            })}
                        />
                        {errors.KitchenCabinetValue && (
                            <p className="portal-error">
                                {errors.KitchenCabinetValue.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group-portal">
                    <label
                        htmlFor="EditingCounterTopvalue"
                        className="label-txt-portal"
                    >
                        Editing CounterTop value
                    </label>
                    <div className="currency-wrap">
                        <span className="currency-code">$</span>
                        <input
                            className="text-currency"
                            type="number"
                            id="EditingCounterTopvalue"
                            name="EditingCounterTopvalue"
                            {...register("EditingCounterTopvalue", {
                                required: true,
                            })}
                        />
                        {errors.EditingCounterTopvalue && (
                            <p className="portal-error">
                                {errors.EditingCounterTopvalue.message}
                            </p>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SuperAdminPortal;
