import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./DataTable.scss";
import format from 'date-fns/format';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'date',
    headerName: 'Date',
    type: 'Date',
    width: 120,
    valueFormatter: (params) => {
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
    field: 'paid', 
    headerName: 'Status',
    width: 160,
    renderCell: (params) => (
      <span>{params.value}</span>
    )
  },
];

const DataTable = () => {
  const [data, setData] = useState([]);
  const [fileInput, setFileInput] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/earnings/')
      .then((response) => {
        setData(response.data);
        console.log('Data from server:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/earnings/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting row:', error);
      });
  };
  

  const columnsWithDelete = [
    ...columns,
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row.id)}>Delete</button>
      ),
    },
  ];

  const handleFileUpload = (file) => {
    if (file) {
      console.log('File selected:', file.name);

      const formData = new FormData();
      formData.append('csvFile', file);

      axios
        .post('http://localhost:3001/upload/csv', formData)
        .then((response) => {
          const uploadData = response.data;
          console.log('Upload response:', uploadData);
          alert(uploadData.message);

          // Fetch and update the data without page reload
          axios
            .get('http://localhost:3001/earnings/')
            .then((response) => {
              setData(response.data);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        })
        .catch((error) => {
          console.error('Error uploading CSV file:', error);
        });
    } else {
      alert('Please select a CSV file to upload.');
    }
  };

  return (
    <div className="datatable">
      <div className="home">
        <div className="homeContainer">
          <h2 className="title">Dashboard</h2>
          <div>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setFileInput(e.target.files[0])}
            />
            <button onClick={() => handleFileUpload(fileInput)}>Upload CSV</button>
            <DataGrid
            rows={data}
            columns={columnsWithDelete}
            pageSize={5}
            rowsPerPageOptions={[5]}checkboxSelection
/>

          </div>
        </div>
      </div>
    </div> 
  );
};

export default DataTable;
