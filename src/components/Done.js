import React from "react";
import RoutineCard from "./RoutineCard";

export default class Done extends React.Component {
  render() {
    const routines = this.props.routines;

    return (
      <div style={flexContainerStyle}>
        {routines.map((routine) => (
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
