import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routines from "./components/Routines.js";
import RoutineDone from "./components/RoutineDone";
import Todos from "./components/Todos";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import { getTodaysRoutines, toggleRoutineByName } from "./backend/routes";
import { getMonth, getDayOfMonth } from "./backend/helpers";
import Done from "./components/Done";

class App extends React.Component {
  toggleRoutine = (routine, event) => {
    toggleRoutineByName(routine.name);
    this.setState({ routines: getTodaysRoutines() });
    if (event.target.checked) {
      this.setState({
        routineDone: routine,
      });
    }
  };
  componentDidMount() {
    this.setState({ routines: getTodaysRoutines() });
  }

  state = {
    routines: [],
    todo: true,
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
            />
          </div>
          <div style={flexItemStyle}>
            <Routines
              routines={this.state.routines.filter(
                (routine) => routine.done[month][dayOfMonth]
              )}
              toggleRoutine={this.toggleRoutine}
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
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    if (this.state.routineDone)
      return <RoutineDone routine={this.state.routineDone}></RoutineDone>;
    const routines = this.state.routines;
    return (
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            onClick={() => this.setState({ todo: true })}
          >
            To Do
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.setState({ todo: false })}
          >
            Done
          </Button>
        </ButtonGroup>
        <ProgressBar
          striped
          variant="success"
          now={getPercentageDone(routines)}
          label={`${getPercentageDone(routines)}%`}
        />
        {this.state.todo && (
          <Todos
            routines={this.state.routines.filter(
              (routine) => !routine.done[month][dayOfMonth]
            )}
            toggleRoutine={this.toggleRoutine}
          ></Todos>
        )}
        {!this.state.todo && (
          <Done
            routines={this.state.routines.filter(
              (routine) => routine.done[month][dayOfMonth]
            )}
          ></Done>
        )}
      </div>
    );
  }
}
const flexItemStyle = { flex: "1", border: "1px #ccc solid", width: "50%" };
const getPercentageDone = (routines) => {
  const month = getMonth();
  const dayOfMonth = getDayOfMonth();
  return (
    (routines.filter((routine) => routine.done[month][dayOfMonth]).length /
      routines.length) *
    100
  );
};
export default App;
