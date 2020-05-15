import React from "react";
// import RoutineCard from "./RoutineCard";
import PieChart from "./PieChart";
import MinutesSpent from "./MinutesSpent";
import Log from "./Log";
import { getTodaysRoutines } from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import CompareDays from "./CompareDays";

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
        <div style={{ flexGrow: "1", height: "100vh" }}>
          <PieChart></PieChart>
          <Log></Log>
        </div>
        <div style={{ flexGrow: "1", height: "100vh" }}>
          <MinutesSpent></MinutesSpent>
          <CompareDays></CompareDays>
        </div>
      </div>
    );
  }
}
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
};
