import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="ccd">
      <Card className="Card" style={{ width: "18rem" }}>
        <div style={{ height: "100%" }}>
          <Card.Img variant="top" src={posterURL} style={{ width: "100%" }} />
        </div>
        <Card.Body className="text">
          <Card.Title>
            <b>{title}</b>
          </Card.Title>

          <Card.Text>
            <p>{description}</p>
            <p>Rating: {rating}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
