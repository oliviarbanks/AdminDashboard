import React, { useState, useEffect } from "react";
import "./Table.scss";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import axios from "axios";

const CustomTable = () => {
  const [data, setData] = useState([]); // Remove TypeScript-specific syntax
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the server using Axios
    axios
      .get("http://localhost:3001/earnings/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Ambassador id</TableCell>
            <TableCell className="tableCell">Ambassador Name</TableCell>
            <TableCell className="tableCell">Date Paid</TableCell>
            <TableCell className="tableCell">Amount Paid</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">
                {row.date ? new Date(row.date).toLocaleDateString('en-US') : ''}
                </TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">
                <span className="status" style={{ color: row.isPaid ? "green" : "red" }}>
                  <span className="statusText">{row.isPaid ? "Yes" : "No"}</span>
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
