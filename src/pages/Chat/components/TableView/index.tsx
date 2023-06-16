import React from "react";
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RoofingTwoTone } from "@mui/icons-material";

const TableViewContainer = styled.div`
    margin-top: 10px;
    background: rgba(55, 101, 239, 0.05);

    th {
        color: #74acf6;
        font-weight: bolder;
    }

    td {
        color: #96a9c2;
    }

    th, td {
        padding: 12px;
        border-bottom: 1px solid rgb(94 120 200 / 50%);
    }

`

const TableView = ({ chartData }: any) => {
    const data = chartData.data || [];
    if (data.length === 0) return null;
    const columnHeaders = Object.keys(data[0]);
    return (
        <TableContainer component={TableViewContainer}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columnHeaders.map(header => <TableCell key={header}>{header}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row: any, index: number) => (
                        <TableRow
                            key={index}
                        >
                            {columnHeaders.map(header => <TableCell key={header}>{row[header]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

};

export default TableView;
