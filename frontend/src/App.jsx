import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage.jsx";
import Navbar from "./pages/Navbar.jsx"
import "./App.css";
import Home from "./pages/Home.jsx"
import Login from "./pages/Authentication/Login.jsx"
import Signup from "./pages/Authentication/Signup.jsx"

import Scholarships from "./pages/Scholarships";
// import ScholarshipDetails from "./pages/ScholarshipDetails";
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks.jsx";
// import Bookmarks from "./pages/Bookmarks";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/bookmarks" element={<Bookmarks />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
