import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage.jsx";
import Navbar from "./pages/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Authentication/Login.jsx"
import Signup from "./pages/Authentication/Signup.jsx"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
