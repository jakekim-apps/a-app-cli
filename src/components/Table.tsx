import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from "@mui/material/Checkbox";
import {useEffect, useState} from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const HeaderMap = {
    card: {
        title: "Card List",
        headers: [
            {
                key: 'name',
                text: 'Name'
            },
            {
                key: 'number',
                text: 'Card Number'
            },
            {
                key: 'description',
                text: 'Description'
            }
        ]
    },
    account: {
        title: "Account List",
        headers: [
            {
                key: 'name',
                text: 'Name'
            },
            {
                key: 'number',
                text: 'Account Number'
            },
            {
                key: 'description',
                text: 'Description'
            },
            {
                key: 'amount',
                text: 'Amount'
            }
        ]
    },
    category: {
        title: 'Category List',
        headers: [
            {
                key: 'name',
                text: 'name'
            },
            {
                key: 'description',
                text: 'Description'
            }
        ]
    }
}


interface tableProps {
    type: string
    headers: any[]
    data: any[]
    selectedIdList: string[]
    onClickRow(d: any): void
    handleClickCheckbox:(e: any, id: string) => void
    handleClickHeaderCheckbox:(e: any) => void
    // categories?: any[]
    // accounts?: any[]
    // cards?: any[]
}

const CommonTable = (props: tableProps) => {

    const makeTargetData = () => {

    }

    const [targetData, setTargetData] = useState([]);

    const headers = props.headers || [];
    const rows = props.data || [];

    const handleClickRow = (d: any) => {
        if (props.onClickRow) {
            props.onClickRow(d);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                indeterminate={props.selectedIdList.length > 0 && props.selectedIdList.length < props.data.length}
                                checked={props.data.length > 0 && props.selectedIdList.length === props.data.length}
                                onChange={props.handleClickHeaderCheckbox}
                            />
                        </StyledTableCell>
                        {
                            headers.map((h: any, i: number) => <StyledTableCell key={'header_' + i}> {h.text} </StyledTableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((r: any, i: number) => {
                        const isSelected = props.selectedIdList.indexOf(r._id) > -1
                        return (
                        <StyledTableRow hover key={i} onClick={handleClickRow ? () => handleClickRow(r) : () => {
                        }}>
                            <StyledTableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    checked={isSelected}
                                    onChange={(e) => props.handleClickCheckbox(e, r._id)}
                                />
                            </StyledTableCell>
                            {
                                headers.map((h: any, i: number) =>
                                    <StyledTableCell
                                        key={'body_' + i}
                                    >
                                        {r[h.key]}
                                    </StyledTableCell>
                                )
                            }
                        </StyledTableRow>
                        )})}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CommonTable;
