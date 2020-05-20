import { getRoutines } from "../backend/routes";
import React from "react";
import RoutineCard from "./RoutineCard";
export default class ViewRoutines extends React.Component {
  state = { routines: [] };
  componentDidMount() {
    this.setState({ routines: getRoutines() });
  }
  render() {
    return (
      <div style={flexContainerStyle}>
        {this.state.routines.map((routine) => (
          <RoutineCard routine={routine} />
        ))}
      </div>
    );
  }
}

const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
};
