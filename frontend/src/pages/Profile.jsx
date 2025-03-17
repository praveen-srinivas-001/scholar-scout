import React from "react";
// import "./Profile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    
  };

  return (
    <div>
      <Navbar/>
      <div className="profile-container">
      <img className="profilepic" src="" alt=""></img>
      <div className="userinfo">
        <h2>Name</h2>
        <h2>Profession</h2>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;