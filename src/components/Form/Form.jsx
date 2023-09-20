import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.scss";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AddAmbassador = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [isPaid, setPaid] = useState("paid"); // Default to "paid"

  const history = useNavigate();

  const addAmbassador = () => {
    if (!name || !date || !amount || !isPaid) {
      // Check if any required field is missing
      alert("Please fill in all fields."); // Provide user feedback
      return; // Prevent the request if fields are missing
    }
    console.log(name, date, amount, isPaid); // Add this line to log the data
    const parsedAmount = parseFloat(amount);
    const paidValue = isPaid === "paid" ? 1 : 0; // Convert to 1 (paid) or 0 (not paid)

    axios
      .post("http://localhost:3001/earnings", {
        name: name,
        date: date,
        amount: parsedAmount,
        paid: paidValue,
      })
      .then(() => {
        console.log("success");
        history("/list");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="form">
        <Sidebar />
        <div className="formContainer">
          <Navbar />
          <div className="title">Manually upload information here</div>
          <div className="inputContainer">
            <label>Name:</label>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label>Date:</label>
            <input
              type="date"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label>Amount:</label>
            <input
              type="number"
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label>Status:</label>
            <div className="radio-group">
              <input
                type="radio"
                id="paid"
                name="status"
                value="paid"
                checked={isPaid === "paid"}
                onChange={() => setPaid("paid")}
              />
              <label htmlFor="paid">Paid</label>
              <input
                type="radio"
                id="notPaid"
                name="status"
                value="not paid"
                checked={isPaid === "not paid"}
                onChange={() => setPaid("not paid")}
              />
              <label htmlFor="notPaid">Not Paid</label>
            </div>
          </div>

          <button onClick={addAmbassador}>Add Earnings</button>
        </div>
      </div>
    </div>
  );
};

export default AddAmbassador;
