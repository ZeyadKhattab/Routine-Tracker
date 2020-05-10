import React from "react";
import { Line } from "react-chartjs-2";

export default class extends React.Component {
  getGraph = () => {
    const { x, y } = getData(this.props.routine);
    const data = {
      labels: x,
      datasets: [
        {
          label: "# Times",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: y,
        },
      ],
    };
    return data;
  };
  render() {
    return (
      <div>
        <h2>This is how you have been doing in the last {numWeeks} weeks</h2>
        <Line
          data={this.getGraph()}
          // width={40}
          // height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
const numWeeks = 6;
const getData = (routine) => {
  const doneArray = [];
  let currTime = new Date().getTime();
  let rem = numWeeks;
  const labels = [];
  while (rem > 0) {
    let date = new Date(currTime);
    let dayOfWeek = date.getDay() - 1;
    if (dayOfWeek < 0) dayOfWeek += 7;
    let dayOfMonth = date.getDate() - 1;
    let month = date.getMonth();

    doneArray.push(routine.done[month][dayOfMonth]);
    if (dayOfWeek === 0) {
      rem--;
      labels.push(`${dayOfMonth + 1}/${month + 1}`);
    }
    currTime -= 24 * 60 * 60 * 1000;
  }
  labels.reverse();
  // for (let i = 1; i <= numWeeks; i++) labels.push(`Week ${i}`);
  let data = [];
  while (doneArray.length > 0) {
    let cnt = 0;
    let sz = Math.min(7, doneArray.length);
    while (sz-- > 0) cnt += doneArray.pop() ? 1 : 0;
    data.push(cnt);
  }

  return { x: labels, y: data };
};
