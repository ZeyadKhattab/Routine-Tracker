import {
  getDayOfMonth,
  getMonth,
  getArray,
  getDayOfWeek,
  getDaysInMonths,
} from "./helpers";
export default class Routine {
  constructor(
    name,
    type,
    days = [false, false, false, false, false, false, false],
    estimation,
    imageLink = "",
    tag
  ) {
    this.name = name;
    this.type = type;
    this.days = days;
    this.estimation = estimation;
    this.imageLink = imageLink;
    this.tag = tag;
    this.done = getArray(12, 31, false);
    this.info = getArray(12, 31, "");
    this.active = getArray(12, 31, false);
    this.timeNeeded = getArray(12, 31, 0);
    this.touchTime = getArray(12, 31, [0, 0]);
    const month = getMonth();
    const day = getDayOfMonth();
    for (let m = month; m < 12; m++)
      for (let d = m === month ? day : 0; d < getDaysInMonths(m); d++)
        this.active[m][d] = true;
  }
  toggle = () => {
    let month = getMonth(),
      day = getDayOfMonth();
    this.done[month][day] = !this.done[month][day];
  };
  markDone = (addedInfo, minutes) => {
    let month = getMonth(),
      day = getDayOfMonth();
    this.done[month][day] = true;
    this.info[month][day] = addedInfo;
    this.timeNeeded[month][day] = minutes;
    const today = new Date();
    this.touchTime[month][day] = [today.getHours(), today.getMinutes()];
  };
  // returns 1 if did today, -1 if should have been done but didn't and 0 otherwise
  todayStatus = () => {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    const dayOfWeek = getDayOfWeek();
    if (this.days[dayOfWeek] && this.active[month][dayOfMonth])
      return this.done[month][dayOfMonth] ? 1 : -1;
    else return 0;
  };
  numTimesDone = () => {
    let ans = 0;
    for (let m = 0; m < 12; m++)
      for (let d = 0; d < 31; d++) ans += this.done[m][d] ? 1 : 0;
    return ans;
  };
  getStartTime = (month, dayOfMonth, comp = false) => {
    const finishTime = this.touchTime[month][dayOfMonth];
    const hrEnd = finishTime[0],
      minEnd = finishTime[1];
    const toNum = hrEnd * 60 + minEnd;
    let ans = toNum - this.timeNeeded[month][dayOfMonth];
    if (ans < 0) ans += 24 * 60;
    if (comp && ans < 4 * 60) ans += 24 * 60;
    return ans;
  };
  getDuration = (month, dayOfMonth) => {
    let start = this.getStartTime(month, dayOfMonth);
    return `${Math.floor(start / 60)}:${start % 60} - ${
      this.touchTime[month][dayOfMonth][0]
    }:${this.touchTime[month][dayOfMonth][1]}`;
  };
  getTimesShouldDone = () => {
    let ans = 0;
    // revise the fact that the day stars at 4 am
    for (let m = 0; m < 12; m++)
      for (let d = 0; d < 31; d++) {
        let date = new Date(2020, m, d);
        if (date > new Date()) break;
        if (this.active[m][d] && this.days[getDayOfWeek(date)]) ans++;
      }
    return ans;
  };
  getTotalTimeSpent = () => {
    let ans = 0;
    for (let m = 0; m < 12; m++)
      for (let d = 0; d < 31; d++) ans += parseInt(this.timeNeeded[m][d]);
    return ans;
  };
}
