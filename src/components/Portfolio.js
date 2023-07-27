import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import cubCarePreview from "../assets/cubCarePreview.png"
import breakMyIntakePreview from "../assets/breakMyIntakePreview.png"
import bitesNBoozePreview from "../assets/bitesNBoozePreview.png"
import weatherDashboardPreview from "../assets/weatherDashboardPreview.png"
import passwordGeneratorPreview from "../assets/passwordGeneratorPreview.png"
import codeQuizPreview from "../assets/codeQuizPreview.png"

import React from "react";

function Portfolio(){
    return(
        <div>
      <h3>My Projects</h3>
      <hr className="divider" /> 
<div className="d-flex justify-content space-between mx-5">
  <div className="row">

    <div className="col-md-4">
      <Card className="text-center">
      <Card.Header>CubCare</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={cubCarePreview} />
        <Card.Text>
        CubCare is a childcare website where parents can match with babysitters, and can select babysitters to care for their children..
        </Card.Text>
        <a href="https://github.com/tcunningham203/babysitter-finder" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">GitHub Repo</Button>
        </a>
        <a href="https://cubcare-9dc4e13d9451.herokuapp.com/create-profile" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">Live URL</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>

    <div className="col-md-4">
      <Card className="text-center">
      <Card.Header>Break My Intake</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={breakMyIntakePreview} />
        <Card.Text>
        A calorie tracker app that will help you keep your BMI in check.
        </Card.Text>
        <a href="https://github.com/Hflora2010/Break-My-Intake" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">GitHub Repo</Button>
        </a>
        <a href="https://evening-journey-80732.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">Live URL</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>

    <div className="col-md-4">
      <Card className="text-center">
      <Card.Header>Bites n' Booze</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={bitesNBoozePreview} />
        <Card.Text>
        With the help of this website, you will be able to generate a dish or a cocktail recipe, based on the ingredients you like.
        </Card.Text>
        <a href="https://github.com/odobashigenci/Bites-n--booze" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">GitHub Repo</Button>
        </a>
        <a href="https://odobashigenci.github.io/Bites-n--booze/homepage.html" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">Live URL</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>

    <div className="col-md-4">
      <Card className="text-center">
      <Card.Header>Weather Dashboard</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={weatherDashboardPreview} />
        <Card.Text>
        This is a weather app useful to check the real time weather, and a 5-day forecast all around the world.
        </Card.Text>
        <a href="https://github.com/odobashigenci/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">GitHub Repo</Button>
        </a>
        <a href="https://odobashigenci.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">Live URL</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>

    <div className="col-md-4">
      <Card className="text-center">
      <Card.Header>Password Generator</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={passwordGeneratorPreview} />
        <Card.Text>
          This is an app that will help you generate a very strong password, based on the criteria that you choose.
        </Card.Text>
        <a href="https://github.com/odobashigenci/password-generator" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">GitHub Repo</Button>
        </a>
        <a href="https://odobashigenci.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">Live URL</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>

    <div className="col-md-4">
      <Card className="text-center">
      <Card.Header>Code Quiz</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={codeQuizPreview} />
        <Card.Text>
          Test you JavaScript skills using the Code-Quiz website.
        </Card.Text>
        <a href="https://github.com/odobashigenci/Code-Quiz" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">GitHub Repo</Button>
        </a>
        <a href="https://odobashigenci.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">
        <Button variant="primary">Live URL</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>

    </div>
    </div>
        </div>
    )
}

export default Portfolio