import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AddRoutine from "./components/AddRoutine";
import Help from "./components/Help";
import ViewRoutines from "./components/ViewRoutines";
import RoutineZoomed from "./components/RoutineZoomed";
import Stats from "./components/Stats";
import { getRoutineByName } from "./backend/routes";
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/add">Add</Nav.Link>
          <Nav.Link href="/help">Help</Nav.Link>
          <Nav.Link href="/stats">Stats</Nav.Link>
          <Nav.Link href="/routines">All Routines</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/add">
          <AddRoutine />
        </Route>
        <Route exact path="/stats">
          <Stats />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route exact path="/routines">
          <ViewRoutines />
        </Route>
        <Route exact path={`/routines/:routineName`}>
          <Zoom />
        </Route>
        <Route exact path="/">
          <App></App>
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
function Zoom() {
  let { routineName } = useParams();
  return <RoutineZoomed routine={getRoutineByName(routineName)} />;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
