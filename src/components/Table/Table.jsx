import React from "react";
import "./Table.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  {
    field: 'datePaid',
    headerName: 'Date Paid',
    type: 'date',
    width: 150,
    valueGetter: (params: GridValueGetterParams) => {
      // Convert the date string to a Date object
      return new Date(params.row.datePaid);
    },
  },
  {
    field: 'isPaid',
    headerName: 'Ambassador paid?',
    type: 'text',
    width: 150,
    valueGetter: (params: GridValueGetterParams) => (params.row.isPaid ? 'Paid' : 'Not Paid'),
  },
  {
    field: 'amountPaid',
    headerName: 'Amount Paid',
    type: 'number',
    width: 150,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', datePaid: '2022-10-15', isPaid: true, amountPaid: 500 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', datePaid: '2022-09-28', isPaid: true, amountPaid: 750 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', datePaid: '2022-11-05', isPaid: false, amountPaid: 0 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', datePaid: '2022-12-20', isPaid: true, amountPaid: 250 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', datePaid: '2022-08-10', isPaid: false, amountPaid: 0 },
  { id: 6, lastName: 'Melisandre', firstName: 'Unknown', datePaid: '2022-07-03', isPaid: true, amountPaid: 1000 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', datePaid: '2022-11-17', isPaid: true, amountPaid: 300 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', datePaid: '2022-10-08', isPaid: false, amountPaid: 0 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', datePaid: '2022-09-02', isPaid: true, amountPaid: 400 },
];

const Table = () => {
  return (
    <div className="table">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Table;
