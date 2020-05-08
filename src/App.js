import React from "react";
import "./App.css";

import Routines from "./components/Routines.js";
import AddRoutine from "./components/AddRoutine";
import { getRoutines, getRoutineByName } from "./backend/routes";

class App extends React.Component {
  toggleRoutine = (name, event) => {
    getRoutineByName(name).toggle();
    console.log(typeof getRoutineByName(name));
    this.componentDidMount();
  };
  componentDidMount() {
    this.setState({ routines: getRoutines(), add: false });
    console.log("didMount");
  }
  handleClick = (e) => {
    this.setState({ add: true });
  };
  state = {
    routines: [],
    add: false,
  };
  render() {
    if (this.state.add === true) return <AddRoutine />;
    return (
      <div className="App">
        <Routines
          routines={this.state.routines}
          toggleRoutine={this.toggleRoutine}
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
