import React from "react";
import Graph from "./Graph";
import Button from "react-bootstrap/Button";
import App from "../App";
import {
  deactivateRoutineByName,
  activateRoutineByName,
  deletRoutineByName,
} from "../backend/routes";
import Card from "react-bootstrap/Card";
import pic from "../assets/sports.png";
import Calendar from "./Calendar";
import { getMonth, getDayOfMonth } from "../backend/helpers";
export default class RoutineZoomed extends React.Component {
  state = {
    done: false,
  };
  activateDeactivateButton = () => {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    const routine = this.props.routine;
    if (routine.active[month][dayOfMonth])
      return (
        <Button
          variant="warning"
          onClick={(e) => {
            deactivateRoutineByName(routine.name);
            this.setState({ done: true });
          }}
        >
          Deactivate
        </Button>
      );
    else
      return (
        <div>
          <Button
            variant="info"
            onClick={(e) => {
              activateRoutineByName(routine.name);
              this.setState({ done: true });
            }}
          >
            Activate
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              deletRoutineByName(routine.name);
              this.setState({ done: true });
            }}
          >
            Delete
          </Button>
        </div>
      );
  };

  render() {
    const routine = this.props.routine;

    if (this.state.done) return <App></App>;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={/* "https://i.ibb.co/5M3PbSr/sports.png" */ pic}
          />
          <Card.Body>
            <Card.Title>{routine.name}</Card.Title>
          </Card.Body>
        </Card>
        {<Graph routine={routine}></Graph>}
        {<Calendar routine={routine}></Calendar>}
        {this.activateDeactivateButton()}
      </div>
    );
  }
}
