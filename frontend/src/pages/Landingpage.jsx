import Navbar from "./Navbar";
import Footer from "./Footer";
import Scholarships from "./Scholarships";
import Image from  "../images/hero.gif";
import "../css/Landing.css";

function Landingpage() {
  return (
    <>
      <Navbar />
      <div class="container">
        <section className="top">
          <img
            src={Image}
            alt="scholars"
            className="landimg"
          />
          <div>
            <h1 className="context">Find Scholarships Effortlessly <br /><span style={{color:'blue'}}>&</span> Secure Your Future</h1>
            <p >Helping students connect with the best funding opportunities for their education. Trusted by thousands of students & institutions worldwide</p>
          </div>
        </section>
  
        {/* <section className="sholarship-container">
          <Scholarships />
        </section> */}
      </div>
      <div>
          <h3 style={{alignContent:"center"}}>Designed for Every Student</h3>
          <p>
          For High School Graduates – Explore college scholarships tailored for you.
          For College Students – Find funding for tuition, research, and more.
          For International Students – Access global scholarship opportunities.
          </p>
        
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Landingpage;
