import Navbar from "./Navbar";
import Footer from "./Footer";
import Brand from "./Brand";
import Image from  "../images/scholars.jpeg";
import "../css/Landing.css";
function Landingpage() {
  const handleLogin = () => {};
  const handleSignup = () => {};
  return (
    <>
      <Brand />
      <hr />
      {/* <Navbar /> */}
      <div class="container">
        {/* Features Section */}
        <section className="top">
          <img
            src={Image}
            alt="scholars"
            className="landimg"
          />
          <h1 className="context">Find your Personalized Scholarships here.</h1>
        </section>
        <hr />
        <section className="sholarship-container"></section>

        <h1>Featured Scholarships</h1>
        <div class="parent">
          <div class="div1">
            <div className="scholarship-info">
              <h3 className="scholarship-name">STEM scholarship</h3>
              <p className="amount">$30000</p>
            </div>
            <div className="scholarship-action">
              {/* <button>bookmark</button> */}
              <button>apply now</button>
            </div>
          </div>
          <div class="div2">
            <div className="scholarship-info">
              <h3 className="scholarship-name">STEM scholarship</h3>
              <p className="amount">$30000</p>
            </div>
            <div className="scholarship-action">
              <button>apply now</button>
            </div>
          </div>
          <div class="div3">
            <div className="scholarship-info">
              <h3 className="scholarship-name">STEM scholarship</h3>
              <p className="amount">$30000</p>
            </div>
            <div className="scholarship-action">
              <button>apply now</button>
            </div>
          </div>
        </div>

        <section class="features">
          <div class="feature-card">
            <h3>Personalized Matching</h3>
            <p>
              Our intelligent algorithm matches you with scholarships that fit
              your unique profile, increasing your chances of success.
            </p>
          </div>

          <div class="feature-card">
            <h3>Comprehensive Database</h3>
            <p>
              Access thousands of scholarships from national organizations,
              local communities, and educational institutions.
            </p>
          </div>

          <div class="feature-card">
            <h3>Deadline Reminders</h3>
            <p>
              Never miss an application deadline with our automated notification
              system that keeps you on track.
            </p>
          </div>
        </section>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Landingpage;
