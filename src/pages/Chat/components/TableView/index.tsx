import React from "react";
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

const TableViewContainer = styled.div`
    margin-top: 10px;
    background: rgba(55, 101, 239, 0.05);

    h2 {
        color: #8296d1;
        margin: 10px;
        font-size: 16px;
    }

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
        font-size: 13px;
    }

`

const ROWS_PER_PAGE = 10;
const TableView = ({ chartData }: any) => {
    const {data = [], title } = chartData;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(ROWS_PER_PAGE);
    if (data.length === 0) return null;
    const columnHeaders = Object.keys(data[0]);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <TableContainer component={TableViewContainer}>
            {title && <h2>{title}</h2>}
            <Table>
                <TableHead>
                    <TableRow>
                        {columnHeaders.map(header => <TableCell key={header}>{header}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => (
                        <TableRow
                            key={index}
                        >
                            {columnHeaders.map(header => <TableCell key={header}>{row[header]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )

};

export default TableView;
