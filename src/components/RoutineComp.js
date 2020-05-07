import React from "react";

export default class RoutineComp extends React.Component {
  state = { name: "" };
  render() {
    return (
      <div>
        <input type="checkbox"></input>
        {this.props.routine.name}
      </div>
    );
  }
}
