import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import SelectUSState from "react-select-us-states";
import "../Stylesheet/SingleFamPropertyDetailFive.css";
import { useData } from "../Context/DataContext";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { PdfGenerator } from "../Helpers/PdfGenerator";

const schema = Yup.object({
    NoOFRooms: Yup.number()
        .required("Please enter Number Of Bedrooms")
        .typeError("Please enter Number Of Bedrooms"),
    NoOfBathRooms: Yup.number()
        .required("Please enter Number Of Bathrooms")
        .typeError("Please enter Number Of Bathrooms"),
    KitchenFlooring: Yup.string().required("Please select type of flooring"),
    LivingAreaFlooring: Yup.string().required("Please select type of flooring"),

    Refrigerator: Yup.string().required("Please tick the Refrigerator"),
    DishWasher: Yup.string().required("Please tick the Dishwasher"),
    KitchenSink: Yup.string().required("Please tick the Kitchensink"),
    SinkDisposer: Yup.string().required("Please tick the sinkDisposer"),
    StoveRangeOven: Yup.string().required("Please tick the StoveRangeOven"),
    ClothesWasher: Yup.string().required("Please tick the ClothesWasher"),
    ClothesDryer: Yup.string().required("Please tick the ClothesDryer"),
    Cabinates: Yup.string().required("Please tick the Cabinates"),
    CounterTop: Yup.string().required("Please tick the CounterTop"),

    Bedrooms: Yup.array().of(
        Yup.object().shape({
            flooring: Yup.string().required("Please enter type of flooring"),
        })
    ),

    Bathrooms: Yup.array().of(
        Yup.object().shape({
            flooring: Yup.string().required("Please enter type of flooring"),
        })
    ),
});

const SingleFamPropertyDetailFive = () => {
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

    const listItems = [];
    const BathRooms = [];

    const onSubmission = async data => {
        setValues(data);
        PdfGenerator(data);
        navigate("/EstimatedTaxSavings");
        //console.log(data);
    };

    const selectedRooms = watch("NoOFRooms");
    const selectedBathRooms = watch("NoOfBathRooms");

    for (let i = 1; i <= selectedRooms; i++) {
        listItems.push(
            <div key={`room${i}`}>
                <label
                    className="label-txt-three"
                    style={{ display: "block" }}
                >{`BedRoom No ${i} flooring`}</label>
                <select
                    id={`Bedrooms${i}_flooring`}
                    name={`Bedrooms[${i - 1}].flooring`}
                    className="label-txt"
                    {...register(`Bedrooms[${i - 1}].flooring`, {
                        required: true,
                    })}
                    style={{ width: "50%" }}
                >
                    <option value="">Select</option>
                    <option value="Carpet">Carpet</option>
                    <option value="Vinyl">Vinyl</option>
                    <option value="Ceramic">Ceramic</option>
                    <option value="Wood">Wood</option>
                </select>
                {errors.Bedrooms && errors.Bedrooms[i - 1]?.flooring && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.Bedrooms[i - 1]?.flooring?.message}
                    </p>
                )}
            </div>
        );
    }

    for (let i = 1; i <= selectedBathRooms; i++) {
        BathRooms.push(
            <div key={`BathRooms${i}`}>
                <label
                    className="label-txt-three"
                    style={{ display: "block" }}
                >{`BathRoom No ${i} flooring`}</label>
                <select
                    id={`Bathroom_${i}_flooring`}
                    name={`Bathrooms[${i - 1}].flooring`}
                    className="label-txt"
                    {...register(`Bathrooms[${i - 1}].flooring`, {
                        required: true,
                    })}
                    style={{ width: "50%" }}
                >
                    <option value="">Select</option>
                    <option value="Carpet">Carpet</option>
                    <option value="Vinyl">Vinyl</option>
                    <option value="Ceramic">Ceramic</option>
                    <option value="Wood">Wood</option>
                </select>
                {errors.Bathrooms && errors.Bathrooms[i - 1]?.flooring && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.Bathrooms[i - 1]?.flooring?.message}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h3 className="head-three">
                    Tell us a little more about your property
                </h3>
            </div>
            <p style={{ color: "grey", textAlign: "center" }}>(2 of 2)</p>
            <form className="form-three" onSubmit={handleSubmit(onSubmission)}>
                <div>
                    <label
                        htmlFor="NumberOfBedRooms"
                        className="label-txt-three"
                        style={{ display: "block" }}
                    >
                        How many bedrooms does your property have?
                    </label>
                    <select
                        id="rating"
                        name="NoOFRooms"
                        value={selectedRooms}
                        className="label-txt-three"
                        {...register("NoOFRooms")}
                    >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    {errors.NoOFRooms && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.NoOFRooms.message}
                        </p>
                    )}
                </div>
                {selectedRooms && listItems}
                <div>
                    <label
                        htmlFor="KitchenFlooring"
                        className="label-txt-three"
                        style={{ display: "block" }}
                    >
                        what type of flooring does your kitchen have?
                    </label>
                    <select
                        id="rating"
                        name="KitchenFlooring"
                        className="label-txt-three"
                        {...register("KitchenFlooring")}
                        style={{ width: "30%" }}
                    >
                        <option value="">Select</option>
                        <option value="Carpet">Carpet</option>
                        <option value="Vinyl">Vinyl</option>
                        <option value="Ceramic">Ceramic</option>
                        <option value="Wood">Wood</option>
                    </select>
                    {errors.KitchenFlooring && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.KitchenFlooring.message}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="NumberofBathRooms"
                        className="label-txt-three"
                        style={{ display: "block" }}
                    >
                        How many Bathrooms does your property have?
                    </label>
                    <select
                        id="rating"
                        name="NoOfBathRooms"
                        value={selectedBathRooms}
                        className="label-txt-three"
                        {...register("NoOfBathRooms")}
                    >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    {errors.NoOfBathRooms && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.NoOfBathRooms.message}
                        </p>
                    )}
                </div>
                {selectedBathRooms && BathRooms}
                <div>
                    <label
                        htmlFor="KitchenFlooring"
                        className="label-txt-three"
                        style={{ display: "block" }}
                    >
                        what type of flooring does your Living Area have?
                    </label>
                    <select
                        id="rating"
                        name="LivingAreaFlooring"
                        className="label-txt-three"
                        {...register("LivingAreaFlooring")}
                        style={{ width: "30%" }}
                    >
                        <option value="">Select</option>
                        <option value="Carpet">Carpet</option>
                        <option value="Vinyl">Vinyl</option>
                        <option value="Ceramic">Ceramic</option>
                        <option value="Wood">Wood</option>
                    </select>
                    {errors.LivingAreaFlooring && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.LivingAreaFlooring.message}
                        </p>
                    )}
                </div>

                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Is there a Refrigerator?
                    </label>
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("Refrigerator", { required: true })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("Refrigerator", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.Refrigerator && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.Refrigerator.message}
                    </p>
                )}

                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Is there a DishWasher?
                    </label>{" "}
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("DishWasher", { required: true })}
                            value="yes"
                            className="radio"
                        />{" "}
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("DishWasher", { required: true })}
                            value="no"
                            className="radio"
                        />{" "}
                        No
                    </label>{" "}
                </div>
                {errors.DishWasher && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.DishWasher.message}
                    </p>
                )}
                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Is there a Kitchen Sink?
                    </label>{" "}
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("KitchenSink", { required: true })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("KitchenSink", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.KitchenSink && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.KitchenSink.message}
                    </p>
                )}
                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Is there a Sink Disposer?
                    </label>
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("SinkDisposer", { required: true })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("SinkDisposer", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.SinkDisposer && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.SinkDisposer.message}
                    </p>
                )}
                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Is there an in stove, range or Oven?
                    </label>
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("StoveRangeOven", {
                                required: true,
                            })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("StoveRangeOven", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.StoveRangeOven && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.StoveRangeOven.message}
                    </p>
                )}
                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Is there a Clothes Washer?
                    </label>{" "}
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("ClothesWasher", { required: true })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("ClothesWasher", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.ClothesWasher && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.ClothesWasher.message}
                    </p>
                )}
                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Is there a Clothes Dryer?
                    </label>{" "}
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("ClothesDryer", { required: true })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("ClothesDryer", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.ClothesDryer && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.ClothesDryer.message}
                    </p>
                )}
                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Does your kitchen has Cabinates?
                    </label>
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("Cabinates", { required: true })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("Cabinates", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.Cabinates && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.Cabinates.message}
                    </p>
                )}
                <div className="radio-buttons">
                    <label className="label-txt-op">
                        Does your kitchen has CounterTop?
                    </label>
                    <br></br>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("CounterTop", { required: true })}
                            value="yes"
                            className="radio"
                        />
                        Yes
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            {...register("CounterTop", { required: true })}
                            value="no"
                            className="radio"
                        />
                        No
                    </label>
                </div>
                {errors.CounterTop && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                        {errors.CounterTop.message}
                    </p>
                )}
                <div className="btn-three">
                    <button
                        className="button-three"
                        onClick={() => {
                            navigate("/singleFamilyPropertyDetails");
                        }}
                    >
                        Cancel
                    </button>

                    <button type="submit" className="button-three">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SingleFamPropertyDetailFive;
