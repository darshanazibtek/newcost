import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Multiform from "./Components/Multiform";
import {
    BrowserRouter,
    Route,
    Routes,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from "./Components/Landing";
import Root from "./Components/Root";
import PersonalDataOne from "./Components/PersonalDataOne";
import PropertyTypeSelection from "./Components/PropertyTypeSelection";
import SingleFamPropertyDetail from "./Components/SingleFamPropertyDetail";
import SingleFamPropertyDetailFive from "./Components/SingleFamPropertyDetailFive";
import { useState } from "react";
import EstimatedTaxSavings from "./Components/EstiamtedTaxSavings";
import ConfirmPurchase from "./Modals/ConfirmPurchase";
import Sucess from "./Modals/Sucess";
import SuperAdminLogin from "./Components/SuperAdminLogin";
import GeneratePdf from "./Components/GeneratePdf";
import TestPdfGenerator from "./Helpers/TestPdfGenerator";
import SuperAdminPortal from "./Components/SuperAdminPortal";
import ErrorMessage from "./Modals/ErrorMessage";
import PDFViewer from "./Helpers/GenPdf";
import PDF from "./Helpers/GenPdf";
import GenPdf from "./Helpers/GenPdf";

function App() {
    const [FormOnesubmitted, SetSubmitted] = useState(false);
    const [PropertyTypeSelected, setPropertyTypeSelected] = useState(false);

    const handlePersonalData = data => {
        console.log(data);
        SetSubmitted(true);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<Landing />} />
                    <Route
                        path="/Personalinformation"
                        element={
                            <PersonalDataOne
                                onPersonDetailSubmit={handlePersonalData}
                            />
                        }
                    />

                    <Route
                        path="/singleFamilyPropertyDetails"
                        element={<SingleFamPropertyDetail />}
                    />
                    <Route
                        path="/singleFamPropertyDetailFive"
                        element={<SingleFamPropertyDetailFive />}
                    />
                    <Route
                        path="/EstimatedTaxSavings"
                        element={<EstimatedTaxSavings />}
                    />
                    <Route
                        path="/confirmPurchase"
                        element={<ConfirmPurchase />}
                    />
                    <Route path="/sucess" element={<Sucess />} />
                    <Route path="/error" element={<ErrorMessage />} />
                    <Route path="/login" element={<SuperAdminLogin />} />
                    <Route path="/login1" element={<SuperAdminPortal />} />
                    <Route path="/pdf" element={<GenPdf />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
