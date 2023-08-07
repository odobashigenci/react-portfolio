import React from "react";
import ProjectCard from "../components/ProjectCard";
import Carousel from "react-bootstrap/Carousel";
import cubCarePreview from "../assets/cubCarePreview.png";
import breakMyIntakePreview from "../assets/breakMyIntakePreview.png";
import bitesNBoozePreview from "../assets/bitesNBoozePreview.png";
import weatherDashboardPreview from "../assets/weatherDashboardPreview.png";
import passwordGeneratorPreview from "../assets/passwordGeneratorPreview.png";
import codeQuizPreview from "../assets/codeQuizPreview.png";

function Portfolio() {
  const projects = [
    {
      title: "CubCare",
      imageSrc: cubCarePreview,
      description:
        "CubCare is a childcare website where parents can match with babysitters, and can select babysitters to care for their children.",
      githubLink: "https://github.com/tcunningham203/babysitter-finder",
      liveLink: "https://cubcare-9dc4e13d9451.herokuapp.com/create-profile",
    },
    {
      title: "Break My Intake",
      imageSrc: breakMyIntakePreview,
      description:
        "A calorie tracker app that will help you keep your BMI in check.",
      githubLink: "https://github.com/Hflora2010/Break-My-Intake",
      liveLink: "https://evening-journey-80732.herokuapp.com/",
    },
    {
      title: "Bites N' Booze",
      imageSrc: bitesNBoozePreview,
      description:
        "With the help of this website, you will be able to generate a dish or a cocktail recipe, based on the ingredients you like.",
      githubLink: "https://github.com/odobashigenci/Bites-n--booze",
      liveLink: "https://odobashigenci.github.io/Bites-n--booze/homepage.html",
    },
    {
      title: "Weather Dashboard",
      imageSrc: weatherDashboardPreview,
      description:
        "This is a weather app useful to check the real time weather, and a 5-day forecast all around the world.",
      githubLink: "https://github.com/odobashigenci/Weather-Dashboard",
      liveLink: "https://odobashigenci.github.io/Weather-Dashboard/",
    },
    {
      title: "Password Generator",
      imageSrc: passwordGeneratorPreview,
      description:
        "This is an app that will help you generate a very strong password, based on the criteria that you choose.",
      githubLink: "https://github.com/odobashigenci/password-generator",
      liveLink: "https://odobashigenci.github.io/password-generator/",
    },
    {
      title: "Code Quiz",
      imageSrc: codeQuizPreview,
      description: "Test you JavaScript skills using the Code-Quiz website.",
      githubLink: "https://github.com/odobashigenci/Code-Quiz",
      liveLink: "https://odobashigenci.github.io/Code-Quiz/",
    },
  ];

  return (
    <div>
      <h3>My Projects</h3>
      <hr className="divider" />
      <Carousel>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <ProjectCard {...project} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Portfolio;
