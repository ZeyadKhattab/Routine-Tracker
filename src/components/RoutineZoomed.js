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
import { getMonth, getDayOfMonth, getDayOfWeek } from "../backend/helpers";
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
  getStatus = () => {
    const routine = this.props.routine;
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    if (!routine.active[month][dayOfMonth]) return <h1>NOT ACTIVE</h1>;
    const dayOfWeek = getDayOfWeek();
    if (!routine.days[dayOfWeek]) return <h1>NOT SCHEDULED TODAY</h1>;
    return routine.done[month][dayOfMonth] ? (
      <h1>
        {`You did it today in ${routine.timeNeeded[month][dayOfMonth]} minutes and info was ${routine.info[month][dayOfMonth]}`}{" "}
      </h1>
    ) : (
      <h1>You still have to do it</h1>
    );
  };
  render() {
    const routine = this.props.routine;

    if (this.state.done) return <App></App>;
    return (
      <div>
        <Button variant="primary" onClick={() => this.setState({ done: true })}>
          Back
        </Button>{" "}
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
        {this.getStatus()}
      </div>
    );
  }
}
