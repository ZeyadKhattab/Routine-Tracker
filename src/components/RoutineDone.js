import React from "react";
import { markRoutineAsDone } from "../backend/routes";
import App from "../App";
import Graph from "./Graph";
import Calendar from "./Calendar";
export default class RoutineDone extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target.parentElement;
    const addedInfo = form.addedInfo.value;
    const minutes = form.minutes.value;
    markRoutineAsDone(this.props.routine.name, addedInfo, minutes);
    this.setState({ done: true });
  };
  state = {};
  render() {
    if (this.state.done) return <App></App>;
    const routine = this.props.routine;

    return (
      <div>
        <h1>Congrats on finishing {routine.name}</h1>
        <form>
          <input type="text" placeholder="Details" name="addedInfo"></input>
          <input type="text" placeholder="MinutesNeeded" name="minutes"></input>
          <input type="submit" onClick={this.handleSubmit.bind(this)}></input>
        </form>
        <Graph routine={routine}></Graph>
        <Calendar routine={routine}></Calendar>
      </div>
    );
  }
}
