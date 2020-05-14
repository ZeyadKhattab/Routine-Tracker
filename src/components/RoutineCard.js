import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import pic from "../assets/sports1.png";
import React from "react";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import { Link } from "react-router-dom";
export default class RoutineCard extends React.Component {
  render() {
    const routine = this.props.routine;
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    const routineDone = routine.done[month][dayOfMonth];
    return (
      <Card bg="info" style={cardStyle} className="text-center">
        <Card.Img variant="top" src={routine.imageLink}></Card.Img>

        <Card.Body>
          <Card.Title>
            <Link
              // onClick={this.props.zoomRoutine.bind(this, routine)}
              style={{ color: "black" }}
              to={`/routines/${routine.name}`}
            >
              {routine.name}
            </Link>
          </Card.Title>
          {!routineDone && (
            <Button
              variant="success"
              onClick={this.props.toggleRoutine.bind(this, routine.name)}
            >
              Mark as Done
            </Button>
          )}
          {routineDone && (
            <Button
              variant="success"
              onClick={this.props.zoomRoutine.bind(this, routine)}
            >
              See More
            </Button>
          )}
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
