import { useState, useNavigate } from 'react';
import '../../css/Auth.css';
import { Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("entered handlesubmit");
    const req = await axios.post("https://localhost:3001", {
      name: name,
      email: email,
      password: pass
    });
    console.log(req.data);
    const msg = req.data.message;
    const isSignedup = req.data.isSignUp;
    if (isSignedup) {
      alert(msg);
      navigate("/login");
    } else {
      alert(msg);
    }
  };

  return (
    <div id="signupModal" className="signup-modal">
      <div className="modal-content">
        <h2>Sign up</h2>
        <form>
          <div className="form-input">
            <label htmlFor="signup-name">Full Name</label>
            <input type="text" id="signup-name" value={name} onChange={(e)=> setName(e.target.value)} required />
          </div>

          <div className="form-input">
            <label htmlFor="signup-email">Email Address</label>
            <input type="email" id="signup-email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>

          <div className="form-input">
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" value={pass} onChange={(e)=>setPass(e.target.value)}required />
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
