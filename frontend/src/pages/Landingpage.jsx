import Navbar from "./Navbar";
import Footer from "./Footer";
import Brand from "./Brand";
import "../css/Landing.css"
function Landingpage() {
  return (
    <>
    <Brand />
    {/* <Navbar /> */}
    <div class="container">
      {/* <!-- Features Section --> */}
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
            Access thousands of scholarships from national organizations, local
            communities, and educational institutions.
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
    <Footer />
    </>
  );
}

export default Landingpage;