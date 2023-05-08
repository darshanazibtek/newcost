import React from "react";

const HomeDataOne = ({ StepUp, StepDown }) => {
    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label for="name">Home Sqft</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label for="email">No of bedrooms</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className="form-group">
                    <label for="cars" name="NO Of Rooms">
                        Choose No of Rooms
                    </label>
                    <select name="cars" id="cars">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                    </select>
                </div>
                <div className="form-group">
                    <button onClick={StepDown}>Cancel</button>
                    <button onClick={StepUp}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default HomeDataOne;
