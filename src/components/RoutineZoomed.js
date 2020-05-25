import React from "react";
import Alert from "./Alert";
import Graph from "./Graph";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Chart from "react-google-charts";

import {
  deactivateRoutineByName,
  activateRoutineByName,
  deletRoutineByName,
} from "../backend/routes";
// import pic from "../assets/sports1.png";
import Calendar from "./Calendar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoutineCard from "./RoutineCard";
import { getMonth, getDayOfMonth, getDayOfWeek } from "../backend/helpers";
export default class RoutineZoomed extends React.Component {
  activateDeactivateButton = () => {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    const routine = this.props.routine;
    if (routine.active[month][dayOfMonth])
      return (
        <Button
          variant="warning"
          onClick={(e) => {
            deactivateRoutineByName(routine.name);
          }}
          href="/routines"
        >
          Deactivate
        </Button>
      );
    else
      return (
        <div>
          <Button
            variant="info"
            onClick={(e) => {
              activateRoutineByName(routine.name);
            }}
            href="/routines"
          >
            Activate
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              deletRoutineByName(routine.name);
            }}
            href="/routines"
          >
            Delete
          </Button>
        </div>
      );
  };
  getStatus = () => {
    const routine = this.props.routine;
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    if (!routine.active[month][dayOfMonth]) return <h1>NOT ACTIVE</h1>;
    const dayOfWeek = getDayOfWeek();
    if (!routine.days[dayOfWeek]) return <h1>NOT SCHEDULED TODAY</h1>;
    return routine.done[month][dayOfMonth] ? (
      <h1>
        {`You did it today in ${routine.timeNeeded[month][dayOfMonth]} minutes and info was ${routine.info[month][dayOfMonth]}`}{" "}
      </h1>
    ) : (
      <h1>You still have to do it</h1>
    );
  };
  showAlert() {
    const routine = this.props.routine;
    const status = routine.todayStatus();
    if (status === 1)
      return <Alert variant="success" header="Congrats"></Alert>;
    else if (status === -1)
      return <Alert variant="danger" header="You still have time!"></Alert>;
  }
  render() {
    const routine = this.props.routine;

    return (
      <div style={style}>
        <Button variant="primary" onClick={() => this.setState({ done: true })}>
          Back
        </Button>{" "}
        {this.showAlert()}
        <Container>
          <Row>
            <Col style={containerStyle}>
              <RoutineCard routine={routine} zoom={true}></RoutineCard>
            </Col>
            <Col style={containerStyle}>
              {<Graph routine={routine}></Graph>}
            </Col>
          </Row>
          <Row className="justifyContentMdCenter">
            <Col style={containerStyle}>
              <Calendar
                style={{ justifyContent: "center" }}
                routine={routine}
              ></Calendar>
            </Col>
          </Row>
        </Container>
        {this.activateDeactivateButton()}
        {this.getStatus()}
        {/* <WeeklyBarChart routine={routine}></WeeklyBarChart> */}
        <LastDays routine={routine}></LastDays>
        <CommentDistribution routine={routine}></CommentDistribution>
      </div>
    );
  }
}

function LastDays(props) {
  const routine = props.routine;
  const numDays = 7;
  let dates = [];
  let curr = new Date();
  for (let i = getDayOfWeek(); dates.length < numDays; i = (i + 6) % 7) {
    if (routine.days[i]) {
      dates.push(curr);
    }
    curr = new Date(curr.getTime() - 24 * 60 * 60 * 1000);
  }
  dates.reverse();
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time Period</th>
          <th>Comment</th>
        </tr>
      </thead>

      <tbody>
        {dates.map((date) => (
          <tr>
            <td>{date.toDateString()}</td>
            <td>
              {routine.done[getMonth(date)][getDayOfMonth(date)]
                ? routine.getDuration(getMonth(date), getDayOfMonth(date))
                : "NO"}
            </td>
            <td>{routine.info[getMonth(date)][getDayOfMonth(date)]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
const style = {
  backgroundColor: "#D3D3D3",
};

const containerStyle = {
  // borderStyle: "solid",
  padding: "5px",
  margin: "20px",
  borderRadius: "10px",
};

function CommentDistribution(props) {
  const routine = props.routine;
  let map = new Map();
  for (let m = 0; m < 12; m++)
    for (let d = 0; d < 31; d++)
      if (routine.info[m][d] !== "") {
        const key = routine.info[m][d];
        let cnt = map.has(key) ? map.get(key) : 0;
        cnt++;
        map.set(key, cnt);
      }
  const data = [["Comment", "# of Times"]];
  for (let [comment, cnt] of map) {
    data.push([comment, cnt]);
  }
  if (data.length === 1) return <React.Fragment></React.Fragment>;
  return (
    <Chart
      width={"600px"}
      height={"400px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: "Your Comments",
        backgroundColor: "#546E7A",
      }}
    />
  );
}
