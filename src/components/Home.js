import { useState } from "react";
import profilePicture from "../assets/profile-picture.jpg"
import Figure from 'react-bootstrap/Figure';

function Home() {


  const loading = false;
  
  return (
    <div>
       <Figure>
      <Figure.Image
        width={200}
        height={212}
        alt="Profile Picture"
        src={profilePicture} 
        class="rounded-circle"
      />
      <Figure.Caption className="w-75 m-auto mt-4">
      I am a talented, ambitious, and hardworking individual, adept at handling multiple tasks on a daily basis competently, and at performing very well under pressure. A key strength of mine is communication; building strong relationships with people in order to deliver the best results. Thanks to my ability to learn fast, I have changed paths a few times during my career. Lately, I have come to realize that I have a strong connection with technology, and based on that I have discovered that my ultimate goal and passion are to become a successful web developer.
      </Figure.Caption>
    </Figure>
     
    </div>
    
  );
}

export default Home;
