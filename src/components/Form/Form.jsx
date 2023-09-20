import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import "./Form.scss";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";



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
        history('/list'); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div>
      <div className="form">
            <Sidebar/>
            <div className="formContainer">
                <Navbar/>
      <div className="title">Manually upload information here</div>
        <div className="inputContainer">
        <label>Name:</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="inputContainer">

        <label>Date:</label>
        <input type="date" onChange={(event) => setDate(event.target.value)} />
        </div>
        <div className="inputContainer">

        <label>Amount:</label>
        <input type="number" onChange={(event) => setAmount(event.target.value)} />
        </div>
        
        <div className="inputContainer">

        <label>Paid:</label>
        <input type="text" onChange={(event) => setPaid(event.target.value)} />
        </div>
        <button onClick={addAmbassador}>Add Earnings</button>
      </div>
      
       </div>
    </div>
  );
}

export default AddAmbassador;
