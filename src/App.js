import React from "react";
import "./App.css";

import Routines from "./components/Routines.js";
import AddRoutine from "./components/AddRoutine";
import RoutineZoomed from "./components/RoutineZoomed";

import {
  getRoutines,
  getRoutineByName,
  toggleRoutineByName,
} from "./backend/routes";
import RoutineComp from "./components/RoutineComp";

class App extends React.Component {
  toggleRoutine = (name, event) => {
    toggleRoutineByName(name);
    this.setState({ routines: getRoutines() });
    if (event.target.checked) {
      this.setState({
        routineDone: getRoutineByName(name),
      });
    }
  };
  componentDidMount() {
    this.setState({ routines: getRoutines(), add: false });
    console.log("didMount");
  }
  zoomRoutine = (e) => {
    console.log(e.target.textContent);
    this.setState({ zoomOn: getRoutineByName(e.target.textContent) });
  };
  handleClick = (e) => {
    this.setState({ add: true });
  };
  state = {
    routines: [],
    add: false,
  };
  render() {
    if (this.state.add === true) return <AddRoutine />;
    if (this.state.zoomOn)
      return <RoutineZoomed routine={this.state.zoomOn}></RoutineZoomed>;
    if (this.state.routineDone)
      return (
        <RoutineComp zoom={true} routine={this.state.routineDone}></RoutineComp>
      );
    return (
      <div className="App">
        <Routines
          routines={this.state.routines}
          toggleRoutine={this.toggleRoutine}
          zoomRoutine={this.zoomRoutine}
        />
        <input
          type="submit"
          onClick={this.handleClick.bind(this)}
          value="Add Routine"
        ></input>
      </div>
    );
  }
}

export default App;
