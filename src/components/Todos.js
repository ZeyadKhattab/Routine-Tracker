import React, { useState } from "react";
import RoutineCard from "./RoutineCard";
import { getTodaysRoutines, markRoutineAsDone } from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default class Todos extends React.Component {
  state = {
    routines: [],
    showModal: false,
  };
  componentDidMount() {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    this.setState({
      routines: getTodaysRoutines().filter(
        (routine) => !routine.done[month][dayOfMonth]
      ),
    });
  }
  markRoutineAsDone = (routineName) => {
    this.setState({ showModal: true });
    this.setState({ routineDoneName: routineName });
  };
  render() {
    const routines = this.state.routines;

    return (
      <React.Fragment>
        <div style={flexContainerStyle}>
          {routines.map((routine) => (
            <RoutineCard
              routine={routine}
              markRoutineAsDone={this.markRoutineAsDone}
              doneButton={true}
            />
          ))}
        </div>
        {this.state.showModal && (
          <Example
            routineName={this.state.routineDoneName}
            // render={this.componentDidMount.bind(<Todos></Todos>)}
          />
        )}
      </React.Fragment>
    );
  }
}
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
};

function Example(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    // console.log(props.render());
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Mark as Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
