import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import "./Form.scss";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Datatable from "../components/DataTable/DataTable";



const AddAmbassador = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(""); 
  const [amount, setAmount] = useState(0);
  const [isPaid, setPaid] = useState("");

  const history = useNavigate();

  const addAmbassador = () => {
    console.log(name);
  
    const parsedAmount = parseFloat(amount);
    const paid = isPaid.toLowerCase() === 'yes' || isPaid.toLowerCase() === 'no';  
    axios
      .post('http://localhost:3001/earnings', {
        name: name,
        date: date, 
        amount: parsedAmount,
        paid: paid, 
      })
      .then(() => {
        console.log('success');
        history('/'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div>
      <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
            
       
      <div className="information">
      <div className="title">Manually upload information here</div>
        <label>Name:</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <label>Date:</label>
        <input type="date" onChange={(event) => setDate(event.target.value)} />
        <label>Amount:</label>
        <input type="number" onChange={(event) => setAmount(event.target.value)} />
        <label>Paid:</label>
        <input type="text" onChange={(event) => setPaid(event.target.value)} />
        <button onClick={addAmbassador}>Add Earnings</button>
      </div>
      </div>
       </div>
    </div>
  );
}

export default AddAmbassador;
