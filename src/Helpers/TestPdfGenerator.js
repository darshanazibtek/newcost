import React from "react";
import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";

const TestPdfGenerator = () => {
    const reportData = {
        customerName: "John Doe",
        customerAddress: "123 Main St",
        customerCityStateZip: "Anytown, USA 12345",
        propertyName: "1234 Property Ln",
        propertyType: "Single-family rental",
        landCost: "N/A",
        buildingDepreciableLife: "27.5",
        buildingCostBasis: "$500,000",
        appliancesDepreciableLife: "5",
        appliancesCostBasis: "$20,000",
        personalPropertyDepreciableLife: "5",
        personalPropertyCostBasis: "$10,000",
        totalCostBasis: "$530,000",
    };

    Font.register(
        "https://fonts.gstatic.com/s/kadwa/v2/rnCm-x5V0g7ipiTAT8M.ttf",
        { family: "KadwaRegular" }
    );
    Font.register(
        "https://fonts.gstatic.com/s/kadwa/v2/rnCr-x5V0g7ipix7atM5kn0.ttf",
        { family: "KadwaBold" }
    );
    Font.register(
        "https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
        { family: "MontserratRegular" }
    );

    const styles = StyleSheet.create({
        container: {
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
        },
        formValues: {
            fontSize: 12,
        },
        newContainer: {
            marginTop: 10,
        },
        header: {
            textAlign: "center",
            fontWeight: "hairline",
            fontSize: 30,
            marginTop: 100,
        },
        headerThree: {
            fontWeight: "hairline",
            fontSize: 15,
            marginTop: 100,
        },
        content: {
            marginTop: 100,
            marginHorizontal: 40,
            alignSelf: "stretch",
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "#000",
        },
        tableRowHead: {
            margin: "auto",
            flexDirection: "row",
        },
        tableRow: {
            margin: "auto",
            flexDirection: "row",
            height: 20,
        },
        tableColHeader: {
            fontFamily: "Times-Bold",
            fontSize: 15,
            color: "black",
            width: "50%",
            padding: 8,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#000",
        },
        tableCol: {
            width: "50%",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#000",
            borderLeftWidth: 1,
            borderTopWidth: 1,
        },
        tableCell: {
            margin: "auto",
            fontSize: 10,
            padding: 10,
        },
        tableCellHeader: {
            margin: "auto",
            fontSize: 10,
            fontStyle: "bold",
            padding: 2,
        },
        tableContent: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            marginHorizontal: 100,
        },
        tablesText: {
            marginHorizontal: 15,
            marginVertical: 5,
        },
        tableheader: {
            textAlign: "center",
            fontWeight: "hairline",
            fontSize: 30,
            marginTop: 100,
            fontSize: 14,
        },
    });
    return (
        <Document>
            <Page size="A4">
                <View style={styles.container}>
                    <Text style={styles.header}>Cost Segregation Analysis</Text>
                    <View style={styles.content}>
                        <Text style={styles.formValues}>
                            Single-Family Rental Property
                        </Text>
                        <Text style={styles.formValues}>Address</Text>
                    </View>
                </View>
            </Page>

            <Page size="A4">
                <View>
                    <View style={styles.content}>
                        <Text style={styles.formValues}>[DATE OF REPORT]</Text>
                        <Text style={styles.formValues}>
                            [FULL NAME OF CUSTOMER]
                        </Text>
                        <Text style={styles.formValues}>
                            [ADDRESS OF CUSTOMER]
                        </Text>
                        <Text style={styles.formValues}>
                            [CITY, STATE ZIP CODE]
                        </Text>
                        <View style={styles.newContainer}>
                            <Text style={styles.formValues}>
                                Dear [FULL NAME OF CUSTOMER]:
                            </Text>
                        </View>
                        <View style={styles.newContainer}>
                            <Text style={styles.formValues}>
                                We have completed our cost segregation analysis
                                of the single-family rental property located at
                                [ADDRESS OF PROPERTY]. The purpose of our
                                analysis was to assign cost components to
                                individual assets for determining federal income
                                tax depreciation under the Modified Accelerated
                                Cost Recovery System ("MACRS") defined in
                                section 168 of the Internal Revenue Code.
                            </Text>
                        </View>
                        <View style={styles.newContainer}>
                            <Text style={styles.formValues}>
                                The results of our analysis are summarized
                                below:
                            </Text>
                        </View>

                        <View style={styles.table}>
                            <View style={styles.tableRowHead}>
                                <View
                                    style={{
                                        ...styles.tableColHeader,
                                        width: "50%",
                                        fontWeight: "extrabold",
                                    }}
                                >
                                    <Text style={styles.tableCellHeader}>
                                        Property Type
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        ...styles.tableColHeader,
                                        width: "20%",
                                    }}
                                >
                                    <Text style={styles.tableCellHeader}>
                                        US Federal Income Tax Depreciable Life
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        ...styles.tableColHeader,
                                        width: "30%",
                                    }}
                                >
                                    <Text style={styles.tableCellHeader}>
                                        Cost Basis
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        Row 1, Column 1
                                    </Text>
                                </View>
                                <View
                                    style={{ ...styles.tableCol, width: "20%" }}
                                >
                                    <Text style={styles.tableCell}>
                                        Row 1, Column 2
                                    </Text>
                                </View>
                                <View
                                    style={{ ...styles.tableCol, width: "30%" }}
                                >
                                    <Text style={styles.tableCell}>
                                        Row 1, Column 3
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        Row 2, Column 1
                                    </Text>
                                </View>
                                <View
                                    style={{ ...styles.tableCol, width: "20%" }}
                                >
                                    <Text style={styles.tableCell}>
                                        Row 2, Column 2
                                    </Text>
                                </View>
                                <View
                                    style={{ ...styles.tableCol, width: "30%" }}
                                >
                                    <Text style={styles.tableCell}>
                                        Row 2, Column 3
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        Row 3, Column 1
                                    </Text>
                                </View>
                                <View
                                    style={{ ...styles.tableCol, width: "20%" }}
                                >
                                    <Text style={styles.tableCell}>
                                        Row 3, Column 2
                                    </Text>
                                </View>
                                <View
                                    style={{ ...styles.tableCol, width: "30%" }}
                                >
                                    <Text style={styles.tableCell}>
                                        Row 3, Column 3
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.newContainer}>
                            <Text style={styles.formValues}>
                                The following report and accompanying exhibits
                                contain our findings including a description of
                                the subject property, tax considerations, and
                                MACRS classification for each identified
                                property unit. Our report is subject to the
                                attached Statement of General Assumptions and
                                Limiting Conditions.
                            </Text>
                        </View>

                        <View style={styles.newContainer}>
                            <Text style={styles.formValues}>Sincerely,</Text>
                        </View>
                        <View style={styles.newContainer}>
                            <Text style={styles.formValues}>Mycostseg.com</Text>
                        </View>
                    </View>
                </View>
            </Page>

            <Page size="A4">
                <View style={styles.container}>
                    <Text style={styles.tableheader}>Table of Contents</Text>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Scope of Service and Procedures
                        </Text>
                        <Text style={styles.formValues}>3</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Applicable Law and Tax Support
                        </Text>
                        <Text style={styles.formValues}>4</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Description of Property
                        </Text>
                        <Text style={styles.formValues}>7</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Summary and Conclusions
                        </Text>
                        <Text style={styles.formValues}>8</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>Certification</Text>
                        <Text style={styles.formValues}>9</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Statement of General Assumptions and Limiting
                            Conditions
                        </Text>
                        <Text style={styles.formValues}>10</Text>
                    </View>
                </View>
            </Page>
            <Page size="A4">
                <View style={styles.container}>
                    <Text style={styles.tableheader}>Table of Contents</Text>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Scope of Service and Procedures
                        </Text>
                        <Text style={styles.formValues}>3</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Applicable Law and Tax Support
                        </Text>
                        <Text style={styles.formValues}>4</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Description of Property
                        </Text>
                        <Text style={styles.formValues}>7</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Summary and Conclusions
                        </Text>
                        <Text style={styles.formValues}>8</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>Certification</Text>
                        <Text style={styles.formValues}>9</Text>
                    </View>
                    <View style={styles.tableContent}>
                        <Text style={styles.tablesText}>
                            Statement of General Assumptions and Limiting
                            Conditions
                        </Text>
                        <Text style={styles.formValues}>10</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TestPdfGenerator;
