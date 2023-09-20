import "./App.scss"
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Form from "./components/Form";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";





function App() {

  

  return (
      
      <div className="information">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Registration />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
       

      </div>

     
    
  );
}

export default App;



// when you go to the home page that prompt the admin to register or login. when they have an account it will redirect them to the dashbaord page. 
// You will see a navbar and a side bar. You will see the three cahrts. a bar graph that shows ___ a pie chart that show ___ and a line graph that shows __. These were built using chart.js
// On the sidebar you will see options for manually entering ambassador information. 
// You will also see a tbale with all the ambassador information that shows their name, date paid, amount paid and if they paid
// You will also have a button to upload a excel file of ambassador information that will then populate to the backend and reflect in the graphs and you will see the users in the table 