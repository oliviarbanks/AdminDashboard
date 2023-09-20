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
    width: 120, 
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
          alert('Error uploading CSV file: ' + error.message);
        });

      Papa.parse(file, {
        header: true,
        delimiter: '\t', 
        dynamicTyping: true,
        complete: (results) => {
          console.log('CSV data converted to JSON:', results.data);

          const jsonData = results.data;

          axios
            .post('http://localhost:3001/upload/csv', { jsonData }) 
            .then((response) => {
              console.log('Data inserted into the database:', response.data);

              setData([...data, ...jsonData]); 

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
