import React, { createContext, useContext, useState } from "react";

const AdminDataContext = createContext();

export const AdminDataProvider = ({ children }) => {
    const [AdminData, setAdminData] = useState({});

    const UpdateAdminData = data => {
        setAdminData(prevData => ({
            ...prevData,
            ...data,
        }));
        console.log(AdminData);
    };

    return (
        <AdminDataContext.Provider value={{ AdminData, UpdateAdminData }}>
            {children}
        </AdminDataContext.Provider>
    );
};

export const useAdminData = () => useContext(AdminDataContext);
