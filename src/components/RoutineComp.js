import React from "react";
import { getDayOfMonth, getMonth } from "../backend/helpers";
import { markRoutineAsDone } from "../backend/routes";
export default class RoutineComp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target.parentElement;
    const addedInfo = form.addedInfo.value;
    const minutes = form.minutes.value;
    markRoutineAsDone(this.props.routine.name, addedInfo, minutes);
    this.setState({ done: true });
  };

  state = { done: false };
  render() {
    let routine = this.props.routine;

    if (this.props.zoom) {
      return (
        <div>
          <h1>Congrats on finishin {routine.name}</h1>
          <form>
            <input type="text" placeholder="Details" name="addedInfo"></input>
            <input
              type="text"
              placeholder="MinutesNeeded"
              name="minutes"
            ></input>
            <input type="submit" onClick={this.handleSubmit.bind(this)}></input>
          </form>
        </div>
      );
    }
    return (
      <div style={itemStyle}>
        <div
          style={{ display: "inline" }}
          onClick={this.props.zoomRoutine.bind(this)}
        >
          {routine.name}
        </div>
        <input
          type="checkbox"
          checked={routine.done[getMonth()][getDayOfMonth()]}
          onChange={this.props.toggleRoutine.bind(this, routine.name)}
          style={{
            float: "right",
          }}
        ></input>
      </div>
    );
  }
}

const itemStyle = {
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
};
