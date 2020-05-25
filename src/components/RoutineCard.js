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
  routinePercentage = (routine) =>
    Math.round((routine.numTimesDone() * 100) / routine.getTimesShouldDone());
  render() {
    const routine = this.props.routine;
    const zoom = this.props.zoom;
    return (
      <Card bg="info" style={cardStyle} className="text-center">
        <Card.Img variant="top" src={routine.imageLink}></Card.Img>

        <Card.Body>
          <Card.Title>
            <Link style={{ color: "black" }} to={`/routines/${routine.name}`}>
              {routine.name}
            </Link>
          </Card.Title>
          {zoom && (
            <Card.Text>
              {`${routine.numTimesDone()}/${routine.getTimesShouldDone()}`}
              <br></br>
              {`${this.routinePercentage(routine)}%`}
              <br></br>
              {`${routine.getTotalTimeSpent()} Minutes Spent`}
            </Card.Text>
          )}
          {this.state.doneButton && (
            <Button
              variant="danger"
              onClick={this.props.markRoutineAsDone.bind(this, routine.name)}
            >
              Mark as Done
            </Button>
          )}
          {!zoom && (
            <Button variant="success">
              <Link style={{ color: "black" }} to={`/routines/${routine.name}`}>
                See More
              </Link>
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
