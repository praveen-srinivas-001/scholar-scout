import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Edu<span style={{color:"blue"}}>Nest</span></h1>
        
        <div className="nav-links">
          <Link className='link' to="/home">Home</Link>
          <Link className='link' to="/scholarships">Scholarships</Link>
          <Link className='link' to="/bookmarks">Bookmarks</Link>
          <Link className='link' to="/profile">Profile</Link>
        </div>
        
        <div className="auth-buttons">
          <Link to="/login" className="link">Login</Link>
          <Link to="/signup" className="link">signup</Link>
          {/* <Link to="/profile" className="link">My Account</Link> */}
          {/* <Link to="/scholarships" className="btn">Find Scholarships</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
