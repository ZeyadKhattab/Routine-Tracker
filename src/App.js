import React from "react";
import "./App.css";

import Routines from "./components/Routines.js";
import { getRoutines } from "./backend/routes";

class App extends React.Component {
  componentDidMount() {
    this.setState({ routines: getRoutines() });
  }
  state = {
    routines: [],
  };
  render() {
    return (
      <div className="App">
        <Routines routines={this.state.routines} />
      </div>
    );
  }
}

export default App;
