import React from "react";
import "./Table.scss";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

interface Row {
  id: number;
  user: text;
  datePaid: Date;
  amountPaid: number;
  isPaid: boolean;
}

function createData(
    id: number,
  user: string,
  datePaid: Date, 
  amountPaid: number,
  isPaid: boolean,
): Row {
  return { id, user, datePaid, amountPaid, isPaid };
}

const rows: Row[] = [
    createData(1, 'John Doe', '2023-09-18', 100, true),
    createData(2, 'Jane Smith', '2023-09-19', 150, false),
    createData(3, 'Bob Smith', '2023-09-18', 100, true),
    createData(4, 'Simba Lion', '2023-09-18', 100, true),
    createData(5, 'Star Bucks', '2023-09-18', 100, true),

];

const CustomTable = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table >
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Ambassador id</TableCell>
            <TableCell className="tableCell" >Ambassador Name</TableCell>
            <TableCell className="tableCell">Date Paid</TableCell>
            <TableCell className="tableCell">Amount Paid</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell >{row.id}</TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">{row.datePaid}</TableCell>
              <TableCell className="tableCell">{row.amountPaid}</TableCell>
              <TableCell className="tableCell">
                <span className="status" style={{color: row.isPaid ? "green" : "red"}}>
                  <span className="statusText">{row.isPaid ? "Paid" : "Not Paid"}</span>
                  </span>
                
                </TableCell>            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
