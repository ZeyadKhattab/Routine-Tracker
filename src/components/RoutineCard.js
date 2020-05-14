import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import pic from "../assets/sports1.png";
import React from "react";
import { Link } from "react-router-dom";
export default class RoutineCard extends React.Component {
  state = { doneButton: false };
  componentDidMount() {
    if (this.props.doneButton) this.setState({ doneButton: true });
  }
  render() {
    const routine = this.props.routine;

    return (
      <Card bg="info" style={cardStyle} className="text-center">
        <Card.Img variant="top" src={routine.imageLink}></Card.Img>

        <Card.Body>
          <Card.Title>
            <Link style={{ color: "black" }} to={`/routines/${routine.name}`}>
              {routine.name}
            </Link>
          </Card.Title>
          {this.state.doneButton && (
            <Button
              variant="danger"
              onClick={this.props.toggleRoutine.bind(this, routine)}
            >
              Mark as Done
            </Button>
          )}
          <Button variant="success">
            <Link style={{ color: "black" }} to={`/routines/${routine.name}`}>
              See More
            </Link>
          </Button>
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
