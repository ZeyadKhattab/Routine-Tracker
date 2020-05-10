import React from "react";
import Graph from "./Graph";
import Button from "react-bootstrap/Button";
import App from "../App";
import { deleteRoutineByName } from "../backend/routes";
export default class RoutineZoomed extends React.Component {
  state = { done: false };
  render() {
    const routine = this.props.routine;
    if (this.state.done) return <App></App>;
    return (
      <div>
        <h1> {routine.name}</h1>
        {<Graph routine={routine}></Graph>}
        <Button
          variant="danger"
          onClick={(e) => {
            deleteRoutineByName(routine.name);
            this.setState({ done: true });
          }}
        >
          Delete
        </Button>
      </div>
    );
  }
}
