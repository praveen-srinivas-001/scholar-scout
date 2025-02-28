import '../../css/Auth.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div id="signupModal" className="signup-modal">
      <div className="modal-content">
        <h2>Sign up</h2>
        <form>
          <div className="form-input">
            <label htmlFor="signup-name">Full Name</label>
            <input type="text" id="signup-name" required />
          </div>

          <div className="form-input">
            <label htmlFor="signup-email">Email Address</label>
            <input type="email" id="signup-email" required />
          </div>

          <div className="form-input">
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" required />
          </div>

          <div className="form-input">
            <label htmlFor="signup-confirm">Confirm Password</label>
            <input type="password" id="signup-confirm" required />
          </div>

          <button type="submit" className="form-button">
            Create Account
          </button>

          <div className="form-footer">
            <p>
              Already have an account? <Link to="/login">Log in here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
