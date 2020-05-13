import { getRoutines } from "../backend/routes";
import React from "react";
import RoutineCard from "./RoutineCard";
import RoutineZoomed from "./RoutineZoomed";
export default class ViewRoutines extends React.Component {
  toggleRoutine = (name, event) => {};

  state = { routines: [] };
  componentDidMount() {
    this.setState({ routines: getRoutines() });
  }
  render() {
    if (this.state.zoomOn)
      return <RoutineZoomed routine={this.state.zoomOn}></RoutineZoomed>;
    return (
      <div style={flexContainerStyle}>
        {this.state.routines.map((routine) => (
          <RoutineCard
            routine={routine}
            toggleRoutine={() => this.setState({ zoomOn: routine })}
            zoomRoutine={() => this.setState({ zoomOn: routine })}
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
