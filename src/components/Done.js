import React from "react";
// import RoutineCard from "./RoutineCard";
import PieChart from "./PieChart";
import { getTodaysRoutines } from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";

export default class Done extends React.Component {
  state = { routines: [] };
  componentDidMount() {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    this.setState({
      routines: getTodaysRoutines().filter(
        (routine) => routine.done[month][dayOfMonth]
      ),
    });
  }
  render() {
    // const routines = this.state.routines;

    return (
      <div style={flexContainerStyle}>
        <div style={{ backgroundColor: "red", flexGrow: "1", height: "100vh" }}>
          <PieChart></PieChart>
        </div>
        <div
          style={{ backgroundColor: "green", flexGrow: "1", height: "100vh" }}
        ></div>
      </div>
    );
  }
}
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  backgroundColor: "black",
};
