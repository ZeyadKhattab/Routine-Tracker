import React from "react";
import Graph from "./Graph";
export default class RoutineZoomed extends React.Component {
  render() {
    const routine = this.props.routine;
    return (
      <div>
        <h1> {routine.name}</h1>
        <Graph routine={routine}></Graph>
      </div>
    );
  }
}
