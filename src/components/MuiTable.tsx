import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
            <Table aria-label="table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>ID </TableCell>{" "}
                        <TableCell>First name </TableCell>
                        <TableCell>Lastname </TableCell>
                        <TableCell align='center'>Email </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {TableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell>{row.id} </TableCell>
                            <TableCell>{row.first_name} </TableCell>
                            <TableCell>{row.last_name} </TableCell>
                            <TableCell align='center'>{row.email} </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const TableData = [
    {
        id: 1,
        first_name: "Ode",
        last_name: "Bitten",
        email: "obitten0@wp.com",
        gender: "Male",
        ip_address: "51.179.167.154",
    },
    {
        id: 2,
        first_name: "Kenna",
        last_name: "Showell",
        email: "kshowell1@berkeley.edu",
        gender: "Female",
        ip_address: "159.7.94.207",
    },
    {
        id: 3,
        first_name: "Salmon",
        last_name: "Mertel",
        email: "smertel2@dell.com",
        gender: "Male",
        ip_address: "234.226.106.48",
    },
    {
        id: 4,
        first_name: "Ingeberg",
        last_name: "Orwin",
        email: "iorwin3@economist.com",
        gender: "Female",
        ip_address: "39.24.159.42",
    },
    {
        id: 5,
        first_name: "Cynthie",
        last_name: "Revitt",
        email: "crevitt4@skyrock.com",
        gender: "Female",
        ip_address: "83.173.42.247",
    },
    {
        id: 6,
        first_name: "Kathryne",
        last_name: "Meaker",
        email: "kmeaker5@odnoklassniki.ru",
        gender: "Female",
        ip_address: "231.136.124.187",
    },
    {
        id: 7,
        first_name: "Ursuline",
        last_name: "Doggerell",
        email: "udoggerell6@wisc.edu",
        gender: "Female",
        ip_address: "116.144.18.76",
    },
    {
        id: 8,
        first_name: "Hannah",
        last_name: "Frusher",
        email: "hfrusher7@mayoclinic.com",
        gender: "Female",
        ip_address: "137.26.221.233",
    },
    {
        id: 9,
        first_name: "Jacqui",
        last_name: "Elizabeth",
        email: "jelizabeth8@omniture.com",
        gender: "Female",
        ip_address: "88.213.124.94",
    },
    {
        id: 10,
        first_name: "Bowie",
        last_name: "Seeds",
        email: "bseeds9@fc2.com",
        gender: "Male",
        ip_address: "19.135.128.119",
    },
    {
        id: 11,
        first_name: "Trenton",
        last_name: "Willoway",
        email: "twillowaya@zimbio.com",
        gender: "Male",
        ip_address: "66.6.175.214",
    },
    {
        id: 12,
        first_name: "Adamo",
        last_name: "Klaas",
        email: "aklaasb@tripadvisor.com",
        gender: "Male",
        ip_address: "12.97.0.117",
    },
    {
        id: 13,
        first_name: "Cord",
        last_name: "Canadas",
        email: "ccanadasc@guardian.co.uk",
        gender: "Male",
        ip_address: "204.197.103.78",
    },
    {
        id: 14,
        first_name: "Ricardo",
        last_name: "Sciusscietto",
        email: "rsciussciettod@phoca.cz",
        gender: "Male",
        ip_address: "185.75.15.64",
    },
    {
        id: 15,
        first_name: "Consuelo",
        last_name: "Petrelluzzi",
        email: "cpetrelluzzie@amazon.de",
        gender: "Female",
        ip_address: "254.52.169.170",
    },
    {
        id: 16,
        first_name: "Germaine",
        last_name: "Sauven",
        email: "gsauvenf@theatlantic.com",
        gender: "Male",
        ip_address: "76.24.187.226",
    },
    {
        id: 17,
        first_name: "Hana",
        last_name: "Saiger",
        email: "hsaigerg@rambler.ru",
        gender: "Female",
        ip_address: "134.2.193.109",
    },
    {
        id: 18,
        first_name: "Minda",
        last_name: "Curman",
        email: "mcurmanh@dyndns.org",
        gender: "Female",
        ip_address: "70.148.78.10",
    },
    {
        id: 19,
        first_name: "Inger",
        last_name: "Kopfen",
        email: "ikopfeni@google.com",
        gender: "Female",
        ip_address: "187.233.37.208",
    },
];

export default MuiTable;
