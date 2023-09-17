import React, { useState } from "react";
import axios from 'axios';
import "./Form.scss";

const AddAmbassador = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(""); // Initialize as an empty string
  const [amount, setAmount] = useState(0);
  const [paid, setPaid] = useState("");

  const addAmbassador = () => {
    // No need for date parsing/formatting
    console.log(name);

    // Parse the amount as a float
    const parsedAmount = parseFloat(amount);

    axios
      .post('http://localhost:3001/create', {
        name: name,
        date: date, // Use the date as is, it's already in 'YYYY-MM-DD' format
        amount: parsedAmount,
        paid: paid,
      })
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div>Dashboard</div>
      <div className="information">
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
  );
}

export default AddAmbassador;
