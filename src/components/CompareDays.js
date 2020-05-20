import Table from "react-bootstrap/Table";
import { getRoutineByDay } from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CompareDays extends React.Component {
  constructor(props) {
    super();
    const month = props.month ? props.month : getMonth();
    const dayOfMonth = props.dayOfMonth ? props.dayOfMonth : getDayOfMonth();
    const date = new Date(
      new Date(2020, month, dayOfMonth + 1).getTime() - 24 * 60 * 60 * 1000
    );
    const monthComp = date.getMonth();
    const dayOfMonthComp = date.getDate() - 1;
    this.state = {
      month,
      dayOfMonth,
      monthComp,
      dayOfMonthComp,
    };
  }
  getData = () => {
    const { month, dayOfMonth, monthComp, dayOfMonthComp } = this.state;
    const data = [
      getRoutineByDay(month, dayOfMonth),
      getRoutineByDay(monthComp, dayOfMonthComp),
    ];
    const routines = data[0].map((routine) => routine);
    for (const routine of data[1]) {
      let found = false;
      for (const addedRoutine of routines)
        if (addedRoutine.name === routine.name) found = true;
      if (!found) routines.push(routine);
    }
    return routines.map((routine) => {
      return {
        name: routine.name,
        done1: routine.done[month][dayOfMonth],
        done2: routine.done[monthComp][dayOfMonthComp],
      };
    });
  };
  update = (date) => {
    this.setState({
      monthComp: date.getMonth(),
      dayOfMonthComp: date.getDate() - 1,
    });
  };
  render() {
    const routines = this.getData();
    return (
      <React.Fragment>
        <Test
          update={this.update}
          monthComp={this.state.monthComp}
          dayOfMonthComp={this.state.dayOfMonthComp}
        ></Test>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Routine</th>
              <th>{`${this.state.monthComp + 1}/${
                this.state.dayOfMonthComp + 1
              }`}</th>
              <th>Today</th>
            </tr>
          </thead>

          <tbody>
            {routines &&
              routines.map((routine) => (
                <tr>
                  <td>{routine.name}</td>
                  <td>{routine.done2 ? "YES" : "NO"}</td>
                  <td>{routine.done1 ? "YES" : "NO"}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}
function Test(props) {
  const [startDate, setStartDate] = useState(
    new Date(2020, props.monthComp, props.dayOfMonthComp + 1)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        if (date >= new Date()) {
          alert("You are trying to compare with a date in the future");
          return;
        }
        setStartDate(date);
        props.update(date);
      }}
    />
  );
}
