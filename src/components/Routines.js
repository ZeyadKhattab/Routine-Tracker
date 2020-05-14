import React from "react";
import RoutineComp from "./RoutineComp";
import { getDayOfWeek, getMonth, getDayOfMonth } from "../backend/helpers";
class Routines extends React.Component {
  render() {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    return this.props.routines
      .filter(
        (routine) =>
          routine.days[getDayOfWeek()] && routine.active[month][dayOfMonth]
      )
      .map((routine) => (
        <RoutineComp
          routine={routine}
          toggleRoutine={this.props.toggleRoutine}
        />
      ));
  }
}
export default Routines;
