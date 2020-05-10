import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routines from "./components/Routines.js";
import AddRoutine from "./components/AddRoutine";
import RoutineZoomed from "./components/RoutineZoomed";
import RoutineDone from "./components/RoutineDone";
import {
  getRoutines,
  getRoutineByName,
  toggleRoutineByName,
} from "./backend/routes";

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
    this.setState({ routines: getRoutines() });
  }
  zoomRoutine = (e) => {
    this.setState({ zoomOn: getRoutineByName(e.target.textContent) });
  };

  state = {
    routines: [],
  };
  render() {
    if (this.state.add) return <AddRoutine />;
    if (this.state.zoomOn)
      return <RoutineZoomed routine={this.state.zoomOn}></RoutineZoomed>;
    if (this.state.routineDone)
      return <RoutineDone routine={this.state.routineDone}></RoutineDone>;
    return (
      <div className="App">
        <Routines
          routines={this.state.routines}
          toggleRoutine={this.toggleRoutine}
          zoomRoutine={this.zoomRoutine}
        />
        <input
          type="submit"
          onClick={() => this.setState({ add: true })}
          value="Add Routine"
        ></input>
      </div>
    );
  }
}

export default App;
