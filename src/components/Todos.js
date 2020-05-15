import React, { useState } from "react";
import RoutineCard from "./RoutineCard";
import {
  getTodaysRoutines,
  markRoutineAsDone,
  addRoutine,
  getRoutines,
} from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class Todos extends React.Component {
  state = {
    routines: [],
    showModal: false,
  };
  Example = () => {
    const handleClose = (e) => {
      const form = e.target.parentElement;
      const time = form.time.value;
      const comment = form.comment.value;
      markRoutineAsDone(this.state.routineDoneName, comment, time);
      this.componentDidMount();
    };
    return (
      <>
        <Modal
          show={this.state.showModal}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Time in Minutes"
                  name="time"
                />
              </Form.Group>

              <Form.Group controlId="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter A comment"
                  name="comment"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleClose}>
                Mark as Done
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() =>
                this.setState({ showModal: false, routineDoneName: "" })
              }
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
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
        {this.state.showModal && this.Example()}
      </React.Fragment>
    );
  }
}
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
};
