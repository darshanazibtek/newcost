import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../Stylesheet/Navbar.css";
import Navbar from "./Navbar";

const Root = () => {
    const location = useLocation();
    const isSpecialRoute =
        location.pathname === "/dummy" || location.pathname === "/dummy1";
    return (
        <div>
            {isSpecialRoute ? <></> : <Navbar />}
            <Outlet />
        </div>
    );
};

export default Root;
