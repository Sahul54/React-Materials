import { Route, Routes } from 'react-router-dom';
import "./App.css";
import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggIn, setIsLoggIn] = useState(false);

  return (
    <div>
      <Navbar isLoggIn={isLoggIn} setIsLoggIn={setIsLoggIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
