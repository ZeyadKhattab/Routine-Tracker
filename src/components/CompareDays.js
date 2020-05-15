import Table from "react-bootstrap/Table";
import { getRoutineByDay } from "../backend/routes";
import { getMonth, getDayOfMonth } from "../backend/helpers";
import React from "react";
export default class CompareDays extends React.Component {
  constructor(props) {
    super();
    const month = props.month ? props.month : getMonth();
    const dayOfMonth = props.dayOfMonth ? props.dayOfMonth : getDayOfMonth();
    this.state = {
      month,
      dayOfMonth,
    };
  }
  getData = () => {
    const { month, dayOfMonth } = this.state;
    const data = [
      getRoutineByDay(month, dayOfMonth),
      getRoutineByDay(month, dayOfMonth - 1),
    ];
    const routines = data[0].map((routine) => routine);
    // for (const routine of data[1])
    //   if (!routines.include(routine.name)) routines.append(routine);
    return routines.map((routine) => {
      return {
        name: routine.name,
        done1: routine.done[month][dayOfMonth],
        done2: routine.done[month][dayOfMonth - 1],
      };
    });
  };
  render() {
    const routines = this.getData();
    console.log(routines);
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Routine</th>
            <th>Yesterday</th>
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
    );
  }
}
