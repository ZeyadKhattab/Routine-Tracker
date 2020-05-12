import { getDayOfMonth, getMonth, getArray, getDayOfWeek } from "./helpers";
export default class Routine {
  constructor(
    name,
    type,
    days = [false, false, false, false, false, false, false],
    tag,
    estimation,
    imageLink = ""
  ) {
    this.name = name;
    this.type = type;
    this.tag = tag;
    this.estimation = estimation;
    this.imageLink = imageLink;
    this.days = days;
    this.done = getArray(12, 31, false);
    this.info = getArray(12, 31, "");
    this.active = getArray(12, 31, true);
    this.timeNeeded = getArray(12, 31, 0);
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
  };
  todayStatus = () => {
    const month = getMonth();
    const dayOfMonth = getDayOfMonth();
    const dayOfWeek = getDayOfWeek();
    if (this.days[dayOfWeek] && this.active[month][dayOfMonth])
      return this.done[month][dayOfMonth] ? 1 : -1;
    else return 0;
  };
}
