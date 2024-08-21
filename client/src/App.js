import React from "react";
import MusicDashBoard from "./components/MusicDashboard/MusicDashboard";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MusicDashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
