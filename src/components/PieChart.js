import React from "react";
import Chart from "react-google-charts";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import { getRoutines } from "../backend/routes";

export default class extends React.Component {
  getGraph = (routines, month, dayOfMonth) => {
    const data = [["Task", "Minutes"]];
    for (const routine of routines) {
      data.push([
        routine.name,
        Math.max(routine.timeNeeded[month][dayOfMonth], 10),
      ]);
    }
    return (
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: "Your day Today",
          backgroundColor: "#546E7A",
          //   slices: {
          //     0: { color: "yellow" },
          //     1: { color: "orange" },
          //   },
        }}
      />
    );
  };
  render() {
    const month = this.props.month ? this.props.month : getMonth();
    const dayOfMonth = this.props.dayOfMonth
      ? this.props.month
      : getDayOfMonth();
    return this.getGraph(getRoutines(), month, dayOfMonth);
  }
}
