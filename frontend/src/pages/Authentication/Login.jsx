import { Link } from "react-router-dom";
import "../../css/Auth.css"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
      <div id="loginModal" className="login-modal">
        <div className="modal-content">
         <h2>Login</h2>

          <form onSubmit={() => {navigate('/home')}}>
            <div className="form-input">
              <label htmlFor="login-email">Email Address</label>
              <input type="email" id="login-email" required />
            </div>

            <div className="form-input">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" required />
            </div>

            <button type="submit" className="form-button">
              Log In
            </button>

            <div className="form-footer">
              <p>
                Don't have an account? <Link to="/signup">Sign up now</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

  );
}

export default Login;
