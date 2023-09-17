import "./App.scss"
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Form from "./components/Form";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Single from './pages/Single/Single';


function App() {

  

  return (
      
      <div className="information">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New />} />
          </Route>
          <Route path="date">
            <Route index element={<List/>} />
            <Route path=":dateId" element={<Single/>}/>
            <Route path="new" element={<New />} />
          </Route>
          <Route path="amount">
            <Route index element={<List/>} />
            <Route path=":amountId" element={<Single/>}/>
            <Route path="new" element={<New />} />
          </Route>
          <Route path="paid">
            <Route index element={<List/>} />
            <Route path=":paidId" element={<Single/>}/>
            <Route path="new" element={<New />} />
          </Route>
          
          <Route path="/form" element={<Form />} />
        </Routes>
       

      </div>

     
    
  );
}

export default App;
