import jsPDF from "jspdf";
import { useData } from "../Context/DataContext";

const generatePdf = data => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Loop through the data object and add each value to the PDF
    Object.keys(data).forEach((key, index) => {
        const value = data[key];
        doc.text(`${key}: ${value}`, 20, 20 + index * 10);
    });

    // Save the PDF
    doc.save("data.pdf");
};
const GeneratePdf = () => {
    const { data } = useData();

    const handleGeneratePdf = () => {
        generatePdf(data);
    };

    return (
        <div>
            {/* Your component code here */}
            <button onClick={handleGeneratePdf}>Generate PDF</button>
        </div>
    );
};

export default GeneratePdf;
