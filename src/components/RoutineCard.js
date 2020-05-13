import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pic from "../assets/sports1.png";
import React from "react";
export default class RoutineCard extends React.Component {
  render() {
    const routine = this.props.routine;
    return (
      <Card bg="info" style={cardStyle} className="text-center">
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{routine.name}</Card.Title>
          <Button variant="success">Mark as Done</Button>
        </Card.Body>
      </Card>
    );
  }
}
const cardStyle = {
  width: "250px",
  margin: "10px",
  borderRadius: "8px",
  border: "2px solid",
};
