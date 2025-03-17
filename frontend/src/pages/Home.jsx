import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from  "../images/hero.gif";
import {Link} from "react-router-dom";

function Home() {
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

    </div>
    <Footer />
  </>
  );
}

export default Home;
