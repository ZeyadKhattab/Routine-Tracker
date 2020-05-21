import React from "react";
import MinutesSpent from "./MinutesSpent";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Chart from "react-google-charts";

import {
  getNumRoutinesDone,
  getTimeSpent,
  getRoutines,
  getPercentageDone,
} from "../backend/routes";
export default class Stats extends React.Component {
  state = { state: 1, showMetric: getNumRoutinesDone };
  render() {
    return (
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            onClick={() => this.setState({ state: 0 })}
          >
            Daily
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.setState({ state: 1 })}
          >
            Weekly
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.setState({ state: 2 })}
          >
            Monthly
          </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            onClick={() => this.setState({ showMetric: getNumRoutinesDone })}
          >
            Number Done
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.setState({ showMetric: getTimeSpent })}
          >
            MinutesSpent
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.setState({ showMetric: getPercentageDone })}
          >
            Percentage
          </Button>
        </ButtonGroup>

        <MinutesSpent
          state={this.state.state}
          showMetric={this.state.showMetric}
        ></MinutesSpent>
        <RoutinesFrequency></RoutinesFrequency>
      </div>
    );
  }
}
function RoutinesFrequency() {
  const routines = getRoutines();
  routines.sort((x, y) => y.numTimesDone() - x.numTimesDone());
  const data = [["Routine", "Number of times does"]];
  for (const routine of routines)
    data.push([routine.name, routine.numTimesDone()]);
  return (
    <Chart
      width={"600px"}
      height={"400px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: "Top Routines",
        },
      }}
    />
  );
}
