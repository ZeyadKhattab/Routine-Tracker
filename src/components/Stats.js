import React from "react";
import MinutesSpent from "./MinutesSpent";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { getNumRoutinesDone, getTimeSpent } from "../backend/routes";
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
        </ButtonGroup>

        <MinutesSpent
          state={this.state.state}
          showMetric={this.state.showMetric}
        ></MinutesSpent>
      </div>
    );
  }
}
