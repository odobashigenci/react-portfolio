import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = ({title, imageSrc, description, githubLink, liveLink}) => {
    return (
        <Card className="text-center project-card">
         <Card.Header>{title}</Card.Header>
         <Card.Body>
            <Card.Img variant="top" className="carouselImage" src={imageSrc} />
            <Card.Text>{description}</Card.Text>
            <a href={githubLink} target="blank" rel="noopener noreferrer">
                <Button variant="primary">GitHub Repo</Button>
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Live URL</Button>
        </a>
         </Card.Body>
         {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
    )
}

export default ProjectCard;