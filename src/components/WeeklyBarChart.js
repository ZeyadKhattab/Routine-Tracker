import React from "react";
import Chart from "react-google-charts";
export default class extends React.Component {
  getGraph = () => {
    const { x, y } = getData(this.props.routine);
    const data = [["Day", "Minutes"]];
    for (let i = 0; i < x.length; i++) {
      data.push([x[i], y[i]]);
    }

    return (
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: "Minutes Spent",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    );
  };
  render() {
    return (
      <div>
        <h2>This is how you have been doing in the last {numWeeks} weeks</h2>
        {this.getGraph()}
      </div>
    );
  }
}
const numWeeks = 6;
const getData = (routine) => {
  let time = new Date().getTime();
  let x = [],
    y = [];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 0; i < 7; i++) {
    let date = new Date(time);
    const month = date.getMonth();
    const dayOfMonth = date.getDate() - 1;
    y.push(routine.timeNeeded[month][dayOfMonth]);
    let dayOfWeek = date.getDay();
    x.push(days[dayOfWeek]);
    time -= 24 * 60 * 60 * 1000;
  }
  return { x, y };
};
