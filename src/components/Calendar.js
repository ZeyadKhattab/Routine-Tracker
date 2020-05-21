import React from "react";
import Chart from "react-google-charts";
import { getDaysInMonths } from "../backend/helpers";
class Calendar extends React.Component {
  getData = () => {
    const routine = this.props.routine;

    const data = [
      [
        { type: "date", id: "Date" },
        { type: "number", id: "Won/Loss" },
      ],
    ];
    for (let m = 0; m < 12; m++) {
      for (let d = 0; d < getDaysInMonths(m); d++)
        if (
          routine.active[m][d] &&
          routine.days[getDayOfWeekGivenMYD(m, 2020, d)]
        )
          data.push([new Date(2020, m, d + 1), routine.done[m][d] ? 1 : 0]);
    }

    return data;
  };
  render() {
    return (
      <div>
        <div>
          <Chart
            // width={400}
            // height={300}
            chartType="Calendar"
            loader={<div>Loading Chart</div>}
            data={this.getData()}
            options={options}
          />
        </div>
      </div>
    );
  }
}
const getDayOfWeekGivenMYD = (m, y, d) => {
  let ans = new Date(y, m, d + 1).getDay(); //date at m,d is at 12 am so it gets the required ans-1, that's why i changed it
  if (ans === 7) ans = 0;
  return ans;
};
export default Calendar;
const options = {
  title: "Red Sox Attendance",
  height: 350,
  calendar: {
    cellColor: {
      stroke: "#6B8E23",
      strokeOpacity: 0.6,
      strokeWidth: 1,
    },
  },
  colors: ["#FF0000", "#00FF00"],
};
