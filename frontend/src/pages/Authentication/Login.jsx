import { Link } from "react-router-dom";
import "../../css/Auth.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(event) =>{
    event.preventDefault();
    const req = await axios.post("http://localhost:5000",{
      emailId : emailId,
      password: password
    });

    console.log(req.body());
    alert(req.data.message);
    if(req.data.isLoggedIn){
      navigate("/home");
    }
  }
  return (
      <div id="loginModal" className="login-modal">
        <div className="modal-content">
         <h2>Login</h2>

          <form onSubmit={handleLogin} action={() => {navigate('/home')}}>
            <div className="form-input">
              <label htmlFor="login-email">Email Address</label>
              <input type="email" id="login-email" onChange={(e)=>{setEmailId(e.target.value)}} required />
            </div>

            <div className="form-input">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" onChange={(e)=>{setPassword(e.target.value)}} required />
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
