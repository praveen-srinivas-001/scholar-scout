// import "../css/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/scholarships">Scholarships</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
