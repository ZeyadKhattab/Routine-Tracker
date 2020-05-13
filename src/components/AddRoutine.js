import React from "react";
import { addRoutine } from "../backend/routes";
import App from "../App";
class AddRoutine extends React.Component {
  clickWeekend = (e) => {
    let checkboxList = document.querySelectorAll(".day-item");
    for (let i = 0; i < 7; i++) checkboxList[i].checked = i >= 5;
  };
  clickAll = (e) => {
    let checkboxList = document.querySelectorAll(".day-item");
    checkboxList.forEach((checkbox) => (checkbox.checked = true));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.parentElement;
    let routineName = form.routine.value;
    let routineTpye = form.type.value;
    let routineUrl = form.url.value;
    let routineTime = form.url.time;
    let weekSchedule = [];
    let checkboxList = document.querySelectorAll(".day-item");
    for (const checkbox of checkboxList) weekSchedule.push(checkbox.checked);
    addRoutine(routineName, routineTpye, weekSchedule, routineTime, routineUrl);
    this.setState({ done: true });
  };
  state = { done: false };
  render() {
    if (this.state.done) return <App />;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Routine"
            name="routine"
            id="routine"
            required
          />
          <input
            type="radio"
            name="type"
            value="Daily"
            onClick={this.clickAll.bind(this)}
          />
          {"Daily"}
          <input
            type="radio"
            name="type"
            value="Weekly"
            onClick={this.clickWeekend.bind(this)}
          />
          {"Weekly"}
          <ul id="days">
            <li>
              <input type="checkbox" className="day-item" value={0} /> Monday
            </li>
            <li>
              <input type="checkbox" className="day-item" value={1} /> Tuesday
            </li>
            <li>
              <input type="checkbox" className="day-item" value={2} /> Wednesday
            </li>
            <li>
              <input type="checkbox" className="day-item" value={3} /> Thursday
            </li>
            <li>
              <input type="checkbox" className="day-item" value={4} /> Friday
            </li>
            <li>
              <input type="checkbox" className="day-item" value={5} /> Saturday
            </li>
            <li>
              <input type="checkbox" className="day-item" value={6} /> Sunday
            </li>
          </ul>
          <input type="text" name="time" placeholder="Time in Minutes"></input>
          <input type="text" name="url" placeholder="Image url"></input>
          <input type="submit" onClick={this.handleSubmit.bind(this)}></input>
        </form>
      </div>
    );
  }
}
export default AddRoutine;
