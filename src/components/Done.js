import React from "react";
import RoutineCard from "./RoutineCard";
import PieChart from "./PieChart";

export default class Done extends React.Component {
  render() {
    const routines = this.props.routines;

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
