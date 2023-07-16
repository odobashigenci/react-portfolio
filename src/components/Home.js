import { useState } from "react";
import profilePicture from "../assets/profile-picture.jpg"
function Home() {


  const loading = false;
  
  return (
    <div>
      <div><h1 style={{ color: loading === true ? "red" : "blue" }}>Genci Odobashi</h1></div>
      <div className="container">
        <img className="pPicture" src={profilePicture} alt="Profile Picture" />
      <p className="description">I am a talented, ambitious, and hardworking individual, adept at handling multiple tasks on a daily basis competently, and at performing very well under pressure. A key strength of mine is communication; building strong relationships with people in order to deliver the best results. Thanks to my ability to learn fast, I have changed paths a few times during my career. Lately, I have come to realize that I have a strong connection with technology, and based on that I have discovered that my ultimate goal and passion are to become a successful web developer.</p>
      
        </div>  
    </div>
    
  );
}

export default Home;
