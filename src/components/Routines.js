import React from "react";
import RoutineComp from "./RoutineComp";
import { getDayOfWeek } from "../backend/helpers";
class Routines extends React.Component {
  render() {
    return this.props.routines
      .filter((routine) => routine.days[getDayOfWeek()])
      .map((routine) => (
        <RoutineComp
          routine={routine}
          toggleRoutine={this.props.toggleRoutine}
          zoomRoutine={this.props.zoomRoutine}
        />
      ));
  }
}
export default Routines;
