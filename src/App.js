import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/Todos";
import Done from "./components/Done";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ProgressBar from "react-bootstrap/ProgressBar";

import { getPercentageDone } from "./backend/routes";

class App extends React.Component {
  state = {
    todo: true,
  };
  update = () => {
    this.setState(this.state);
  };

  render() {
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
          now={getPercentageDone()}
          label={`${getPercentageDone()}%`}
        />
        {this.state.todo && <Todos updateParent={this.update}></Todos>}
        {!this.state.todo && <Done></Done>}
      </div>
    );
  }
}

export default App;
