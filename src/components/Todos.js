import React from "react";
import RoutineComp from "./RoutineComp";
import RoutineCard from "./RoutineCard";

export default class Todos extends React.Component {
  render() {
    const routines = this.props.routines;

    return (
      <div style={flexContainerStyle}>
        {routines.map((routine) => (
          <RoutineCard
            routine={routine}
            toggleRoutine={this.props.toggleRoutine}
            zoomRoutine={this.props.zoomRoutine}
          />
        ))}
      </div>
    );
  }
}
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
};
