import profilePicture from "../assets/profile-picture.jpg";

function Home() {
  const loading = false;

  return (
    <div>
      <hr className="myRuler" />
      <div className="home-page center-content">
        <div className="pPicture text-center border-0">
          <div className="rounded-circle overflow-hidden p1">
            <img src={profilePicture} alt="Profile Picture"></img>
          </div>
        </div>
        <p className="aboutMe">
          I am a talented, ambitious, and hardworking individual, adept at
          handling multiple tasks on a daily basis competently, and at
          performing very well under pressure. A key strength of mine is
          communication. Building strong relationships with people in order to
          deliver the best results. Thanks to my ability to learn fast, I have
          changed paths a few times during my career. Lately, I have come to
          realize that I have a strong connection with technology. My new
          passion is creating, styling, and maintaining apps and websites.
        </p>
      </div>
      <hr className="myRuler" />
    </div>
  );
}

export default Home;
