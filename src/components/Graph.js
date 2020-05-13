import React from "react";
import Chart from "react-google-charts";
export default class extends React.Component {
  getGraph = () => {
    const { x, y } = getData(this.props.routine);
    const data = [["Week", "Times"]];
    for (let i = 0; i < x.length; i++) {
      data.push([x[i], y[i]]);
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
            title: "Week Starting",
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
