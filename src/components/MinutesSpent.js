import React from "react";
import Chart from "react-google-charts";
import { getTimeSpent } from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";
export default class MinutesSpent extends React.Component {
  constructor(props) {
    super();
    const month = props.month ? props.month : getMonth();
    const dayOfMonth = props.dayOfMonth ? props.dayOfMonth : getDayOfMonth();
    this.state = {
      month,
      dayOfMonth,
    };
  }

  render() {
    const data = [["Day", "Minutes Spent"]];
    for (let day = numDays - 1; day >= 0; day--) {
      let date = new Date(
        new Date().getTime() - 24 * 60 * 60 * 1000 * day - 4 * 60 * 60 * 1000
      );
      const month = date.getMonth();
      const dayOfMonth = date.getDate() - 1;
      data.push([
        `${month + 1}/${dayOfMonth + 1}`,
        getTimeSpent(month, dayOfMonth),
      ]);
    }
    return (
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: "Minutes Spent",
          },
        }}
      />
    );
  }
}
const numDays = 8;
