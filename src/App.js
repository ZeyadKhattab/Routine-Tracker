import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routines from "./components/Routines.js";
import RoutineZoomed from "./components/RoutineZoomed";
import RoutineDone from "./components/RoutineDone";
import Button from "react-bootstrap/Button";
import {
  getRoutines,
  getRoutineByName,
  toggleRoutineByName,
} from "./backend/routes";
import { getMonth, getDayOfMonth } from "./backend/helpers";
import RoutineCard from "./components/RoutineCard";

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
  home = () => {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={flexItemStyle}>
            <Routines
              routines={this.state.routines.filter(
                (routine) => !routine.done[month][dayOfMonth]
              )}
              toggleRoutine={this.toggleRoutine}
              zoomRoutine={this.zoomRoutine}
            />
          </div>
          <div style={flexItemStyle}>
            <Routines
              routines={this.state.routines.filter(
                (routine) => routine.done[month][dayOfMonth]
              )}
              toggleRoutine={this.toggleRoutine}
              zoomRoutine={this.zoomRoutine}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button href="add" variant="info">
            Addd Routine
          </Button>
        </div>
      </div>
    );
  };
  render() {
    if (this.state.zoomOn)
      return <RoutineZoomed routine={this.state.zoomOn}></RoutineZoomed>;
    if (this.state.routineDone)
      return <RoutineDone routine={this.state.routineDone}></RoutineDone>;
    return this.home();
  }
}
const flexItemStyle = { flex: "1", border: "1px #ccc solid", width: "50%" };
export default App;
