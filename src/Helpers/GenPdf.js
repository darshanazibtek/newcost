import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import TestPdfGenerator from "./TestPdfGenerator";

const GenPdf = () => {
    return (
        <PDFViewer width="1000" height="600">
            <TestPdfGenerator />
        </PDFViewer>
    );
};

export default GenPdf;
