import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import CostSegReport from "../Assests/PdfTemplate/CostSegReportnew.pdf";

// Load the PDF template
export async function PdfGenerator(data) {
    console.log(`fulldata`, data);
    const address = data.streetAddress;
    const dateOfReport = new Date();
    const fullNameofConsumer = data.firstName + " " + data.lastName;
    const CityStateZipcode = data.city + "" + data.state + " " + data.zipcode;
    const PropertySquareFootage = data.HomeSqFt;
    const date = data.purchaseDate;
    const YearBuilt = date.getFullYear();
    const bedroomsQuantity = data.Bedrooms.length;
    const bathroomsQuantity = data.Bathrooms.length;

    const pdfTemplateBytes = await fetch(CostSegReport).then(res =>
        res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(pdfTemplateBytes);

    // // Load the PDF template

    // // Get the form fields from the PDF template
    const form = pdfDoc.getForm();
    const Address = form.getTextField("Address");
    const FullName = form.getTextField("FullName");

    // // Fill out the form fields with the submitted form data
    Address.setText(address);
    FullName.setText(fullNameofConsumer);

    // // Save the filled-out PDF as a new file
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
}
