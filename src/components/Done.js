import React from "react";
// import RoutineCard from "./RoutineCard";
import PieChart from "./PieChart";
import MinutesSpent from "./MinutesSpent";
import Log from "./Log";
import {
  getTodaysRoutines,
  getNumRoutinesDone,
  getTimeSpent,
  getPercentageDone,
} from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import CompareDays from "./CompareDays";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
export default class Done extends React.Component {
  state = { routines: [], state: 1, showMetric: getNumRoutinesDone };
  componentDidMount() {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    this.setState({
      routines: getTodaysRoutines(month, dayOfMonth).filter(
        (routine) => routine.done[month][dayOfMonth]
      ),
    });
  }
  summary() {
    if (this.state.routines.length === 0) return <h1>Nothing Done Yet</h1>;
    return (
      <div style={{ flexGrow: "1", height: "100vh" }}>
        <PieChart></PieChart>
        <Log></Log>
      </div>
    );
  }
  minutesSpent() {
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
      </div>
    );
  }
  render() {
    return (
      <div style={flexContainerStyle}>
        {this.summary()}
        <div style={{ flexGrow: "1", height: "100vh" }}>
          {this.minutesSpent()}
          <CompareDays></CompareDays>
        </div>
      </div>
    );
  }
}
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
};
