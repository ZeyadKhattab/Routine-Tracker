import React from "react";

export default class RoutineComp extends React.Component {
  state = { name: "" };
  render() {
    let routine = this.props.routine;
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.props.toggleRoutine.bind(this, routine.name)}
        ></input>
        {this.props.routine.name}
      </div>
    );
  }
}
