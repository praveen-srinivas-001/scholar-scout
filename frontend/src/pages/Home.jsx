import Brand from "./Brand";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home () {
    return (
        <div>
            <Brand/>
            <Navbar/>
            <h1>This is home page of Scholarship finder</h1>
            <Footer/>
        </div>
    )
}

export default Home;