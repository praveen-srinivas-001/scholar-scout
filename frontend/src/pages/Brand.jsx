import { useState } from "react";
import Login from "./Authentication/Login";
import "../css/Navbar.css";
import { Link } from "react-router-dom";


function Brand() {
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "#3367d6" : "white",
    color: theme ? "white" : "#3367d6",
    
  };
  return (
    <div className="brand" style={styling}>
        
      <h1>Scholar Scout</h1>
      <div className="auth">
        <Link to="/login" className="auth-links" style={styling}>Log In</Link>
        <Link to="/signup" className="auth-links" style={styling}>Sign Up</Link>
        <button onClick={() => setTheme(!theme)}>*</button>
      </div>
    </div>
  );
}

export default Brand;
