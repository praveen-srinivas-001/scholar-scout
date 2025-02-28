import "../css/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  const handleLogin = () => {};
  const handleSignup = () => {};
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/scholarships">Scholarships</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="auth-links">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
