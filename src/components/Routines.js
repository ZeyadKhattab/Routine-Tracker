import React from "react";
import Routine from "../backend/Routine";
import RoutineComp from "./RoutineComp";
class Routines extends React.Component {
  render() {
    return this.props.routines.map((routine) => (
      <RoutineComp routine={routine} />
    ));
  }
}
export default Routines;
