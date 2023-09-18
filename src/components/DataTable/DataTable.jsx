import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./DataTable.scss";
import format from 'date-fns/format';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'date',
    headerName: 'Date',
    type: 'Date',
    width: 120,
    valueFormatter: (params) => {
      // Parse the date from 'YYYY-MM-DD' format and format it as 'MM-DD-YYYY'
      const parsedDate = new Date(params.value);
      return format(parsedDate, 'MM-dd-yyyy');
    },
  },
  {
	field: 'amount',
	headerName: 'Amount',
	type: 'number',
	width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => (
      <span>{params.row.isPaid ? 'Paid' : 'Not Paid'}</span>
    )
  },
];

const DataTable = () => {
	const [data, setData] = useState([]);
  
	useEffect(() => {
	  axios
		.get('http://localhost:3001/getdata')
		.then((response) => {
		  setData(response.data);
		})
		.catch((error) => {
		  console.error('Error fetching data:', error);
		});
	}, []);

  return (
    <div className="datatable">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
