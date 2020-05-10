import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Routines from "./components/Routines.js";
import AddRoutine from "./components/AddRoutine";
import RoutineZoomed from "./components/RoutineZoomed";
import RoutineDone from "./components/RoutineDone";
import Help from "./components/Help";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  getRoutines,
  getRoutineByName,
  toggleRoutineByName,
} from "./backend/routes";
import { getMonth, getDayOfMonth } from "./backend/helpers";

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
          <input
            type="submit"
            onClick={() => this.setState({ add: true })}
            value="Add Routine"
          ></input>
        </div>
      </div>
    );
  };
  render() {
    if (this.state.add) return <AddRoutine />;
    if (this.state.zoomOn)
      return <RoutineZoomed routine={this.state.zoomOn}></RoutineZoomed>;
    if (this.state.routineDone)
      return <RoutineDone routine={this.state.routineDone}></RoutineDone>;

    return (
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="add">Add</Nav.Link>
            <Nav.Link href="help">Help</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/add">
            <AddRoutine />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/">
            {this.home()}
          </Route>
        </Switch>
      </Router>
    );
  }
}
const flexItemStyle = { flex: "1", border: "1px #ccc solid", width: "50%" };
export default App;
