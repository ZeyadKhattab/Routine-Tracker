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
