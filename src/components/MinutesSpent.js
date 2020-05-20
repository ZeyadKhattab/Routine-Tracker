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
    const state = this.props.state | 0;
    const showMetric = this.props.showMetric
      ? this.props.showMetric
      : getTimeSpent;
    const title =
      showMetric === getTimeSpent ? "Minutes Spent" : "Routines Done";
    const data = [["Day", title]];
    if (state === 2) {
      //months
      for (let month = 0; month <= this.state.month; month++) {
        data.push([`Month ${month + 1}`, showMetric(month, -1, state)]);
      }
    } else {
      for (let day = numDays - 1; day >= 0; day--) {
        let date;
        if (state === 0)
          //days
          date = new Date(
            new Date().getTime() -
              24 * 60 * 60 * 1000 * day -
              4 * 60 * 60 * 1000
          );
        else if (state === 1)
          //weeks
          date = new Date(
            new Date().getTime() -
              24 * 60 * 60 * 1000 * 7 * day -
              4 * 60 * 60 * 1000
          );
        const month = date.getMonth();
        const dayOfMonth = date.getDate() - 1;
        data.push([
          `${month + 1}/${dayOfMonth + 1}`,
          showMetric(month, dayOfMonth, state),
        ]);
      }
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
            title,
          },
        }}
      />
    );
  }
}
const numDays = 8;
