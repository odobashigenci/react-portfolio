import React from "react";
import Card from "react-bootstrap/Card";
import Buttons from "../components/Buttons"

const ProjectCard = ({title, imageSrc, description, githubLink, liveLink}) => {
    return (
        <Card className="text-center project-card">
         <Card.Header>{title}</Card.Header>
         <Card.Body>
            <Card.Img variant="top" className="carouselImage" src={imageSrc} />
            <Card.Text>{description}</Card.Text>
            <a href={githubLink} target="blank" rel="noopener noreferrer">
                <Buttons variant="primary">GitHub Repo</Buttons>
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <Buttons variant="primary">Live URL</Buttons>
        </a>
         </Card.Body>
         
        </Card>
    )
}

export default ProjectCard;