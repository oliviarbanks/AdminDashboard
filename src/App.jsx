import "./App.scss"
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Form from "./components/Form/Form";
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