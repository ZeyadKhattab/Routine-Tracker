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
      for (let d = 0; d < getDaysInMonths(m, 2020); d++)
        if (
          routine.active[m][d] &&
          routine.days[getDayOfWeekGivenMYD(m, 2020, d)]
        )
          data.push([new Date(2020, m, d + 1), routine.done[m][d] ? 1 : -1]);
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
            // options={{
            //   intervals: { style: "sticks" },
            //   legend: "none",
            // }}
          />
        </div>
      </div>
    );
  }
}
const getDayOfWeekGivenMYD = (m, y, d) => {
  let ans = new Date(m, y, d + 1).getDay() - 1;
  if (ans < 0) ans += 7;
  return ans;
};
export default Calendar;
