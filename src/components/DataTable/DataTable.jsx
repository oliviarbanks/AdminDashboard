import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./DataTable.scss";
import format from 'date-fns/format';
import { DataGrid } from '@mui/x-data-grid';
import Papa from 'papaparse';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  {
    field: 'date',
    headerName: 'Date',
    type: 'Date',
    width: 150,
    valueFormatter: (params) => {
      const parsedDate = new Date(params.value);
      return format(parsedDate, 'MM-dd-yyyy');
    },
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 120, // Adjust the width as needed
    valueFormatter: (params) => {
      const formattedAmount = `$${params.value.toFixed(2)}`;
      return formattedAmount;
    },
  },
  {
    field: 'paid', 
    headerName: 'Status',
    width: 90,
    renderCell: (params) => (
      <span>{params.value === 1 ? 'Paid' : 'Not Paid'}</span>
    ),
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
      width: 180,
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
              setData(response.data); // Update the state with the latest data
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        })
        .catch((error) => {
          console.error('Error uploading CSV file:', error);
          alert('Error uploading CSV file: ' + error.message);
        });

      // Parse CSV and convert to JSON using papaparse
      Papa.parse(file, {
        header: true,
        delimiter: '\t', // Use tab as the delimiter
        dynamicTyping: true,
        complete: (results) => {
          console.log('CSV data converted to JSON:', results.data);

          // Assuming your JSON data structure has fields 'name', 'date', 'amount', and 'paid'
          const jsonData = results.data;

          // Insert JSON data into the database using Axios
          axios
            .post('http://localhost:3001/upload/csv', { jsonData }) // Adjust the endpoint URL
            .then((response) => {
              console.log('Data inserted into the database:', response.data);

              // Update the state with the new data to display it in the UI
              setData([...data, ...jsonData]); // Append the new data to the existing data

              // You can update the UI or perform other actions here if needed
            })
            .catch((error) => {
              console.error('Error inserting data into the database:', error);
              alert('Error inserting data into the database: ' + error.message);
            });
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          alert('Error parsing CSV file: ' + error.message);
        },
      });
    } else {
      alert('Please select a CSV file to upload.');
    }
  };

  return (
    <div className="datatable">
      <div>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFileInput(e.target.files[0])}
        />
        <button className="csvbutton" onClick={() => handleFileUpload(fileInput)}>Upload CSV</button>
        <DataGrid
          rows={data}
          columns={columnsWithDelete}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default DataTable;
