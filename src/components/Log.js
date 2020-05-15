import Table from "react-bootstrap/Table";
import React from "react";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import { getRoutines } from "../backend/routes";
export default class Log extends React.Component {
  constructor(props) {
    super();
    const month = props.month ? props.month : getMonth();
    const dayOfMonth = props.dayOfMonth ? props.dayOfMonth : getDayOfMonth();
    this.state = {
      month,
      dayOfMonth,
      routines: props.routines,
    };
  }
  componentDidMount() {
    if (!this.state.routines)
      this.setState({
        routines: getRoutines().filter(
          (routine) => routine.done[this.state.month][this.state.dayOfMonth]
        ),
      });
  }
  getTime = (routine) => {
    const month = this.state.month;
    const dayOfMonth = this.state.dayOfMonth;
    const finishTime = routine.touchTime[month][dayOfMonth];
    const hrEnd = finishTime[0],
      minEnd = finishTime[1];
    const toNum = hrEnd * 60 + minEnd;
    const start = toNum - routine.timeNeeded[month][dayOfMonth];
    let hr = Math.floor(start / 60);
    if (hr < 0) hr += 24;
    return `${hr}:${start % 60} - ${finishTime[0]}:${finishTime[1]}`;
  };
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Time Period</th>
            <th>Routine</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>
          {this.state.routines &&
            this.state.routines.map((routine) => (
              <tr>
                <td>{this.getTime(routine)}</td>
                <td>{routine.name}</td>
                <td>{routine.info[this.state.month][this.state.dayOfMonth]}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}
