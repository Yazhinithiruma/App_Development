//import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import AdminDashboard from "./components/AdminDashboard";
import ForgotPassword from "./components/forgetpass";
import Profile from "./components/Profile";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/forgetpass" element={<ForgotPassword/>}/>
          <Route path="/Profile" element={<Profile/>}>
           
        </Route>
      </Routes>
    </Router>
  );
}

export default App;