import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <p>&copy; 2025 EduNest. All rights reserved.</p>
          <div className="footer-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </footer>
  );
}

export default Footer;