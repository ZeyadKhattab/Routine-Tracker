import Routine from "./Routine";
import {
  readFromLocalStorage,
  save,
  getDayOfMonth,
  getMonth,
  getDayOfWeek,
  getWeekOf,
} from "./helpers";
const getRoutines = () =>
  JSON.parse(readFromLocalStorage("routines")).map((routine) =>
    Object.assign(new Routine(), routine)
  );
const routines = getRoutines();

const getRoutineByName = (name) => {
  for (const routine of routines) if (routine.name === name) return routine;
};
const toggleRoutineByName = (name) => {
  getRoutineByName(name).toggle();
  save("routines", JSON.stringify(routines));
};
const addRoutine = (name, type, weekSchedule, time, url) => {
  const newRoutine = new Routine(name, type, weekSchedule, time, url);
  routines.push(newRoutine);
  save("routines", JSON.stringify(routines));
};
const markRoutineAsDone = (name, addedInfo, minutes) => {
  getRoutineByName(name).markDone(addedInfo, minutes);
  save("routines", JSON.stringify(routines));
};
const deactivateRoutineByName = (name) => {
  const month = getMonth();
  const day = getDayOfMonth();
  for (const routine of routines)
    if (routine.name === name) {
      for (let m = month; m < 12; m++)
        for (let d = m === month ? day : 0; d < 31; d++)
          routine.active[m][d] = false;
    }
  save("routines", JSON.stringify(routines));
};
const activateRoutineByName = (name) => {
  const month = getMonth();
  const day = getDayOfMonth();
  for (const routine of routines)
    if (routine.name === name) {
      for (let m = month; m < 12; m++)
        for (let d = m === month ? day : 0; d < 31; d++)
          routine.active[m][d] = true;
    }
  save("routines", JSON.stringify(routines));
};
const deletRoutineByName = (name) => {
  for (let i = 0; i < routines.length; i++)
    if (routines[i].name === name) {
      routines.splice(i, 1);
      break;
    }
  save("routines", JSON.stringify(routines));
};
const getAcitveRoutines = () => {
  const month = getMonth();
  const dayOfMonth = getDayOfMonth();
  return routines.filter((routine) => routine.active[month][dayOfMonth]);
};
const getTodaysRoutines = () => {
  const month = getMonth();
  const dayOfMonth = getDayOfMonth();
  const dayOfWeek = getDayOfWeek();
  return routines.filter(
    (routine) => routine.active[month][dayOfMonth] && routine.days[dayOfWeek]
  );
};
const getPercentageDone = () => {
  const month = getMonth();
  const dayOfMonth = getDayOfMonth();
  return (
    (getTodaysRoutines().filter((routine) => routine.done[month][dayOfMonth])
      .length /
      routines.length) *
    100
  );
};
const getTimeSpent = (
  month = getMonth(),
  dayOfMonth = getDayOfMonth(),
  state
) => {
  if (state === 0) {
    let ans = 0;
    for (const routine of routines) {
      ans += parseInt(routine.timeNeeded[month][dayOfMonth]);
    }
    return ans;
  } else if (state === 1) {
    let curr = new Date(2020, month, dayOfMonth + 1);
    let ans = 0;
    while (true) {
      curr = new Date(curr.getTime() + 24 * 60 * 60 * 1000);
      if (getDayOfWeek(curr) === 0) break;
      for (const routine of routines)
        ans += parseInt(
          routine.timeNeeded[getMonth(curr)][getDayOfMonth(curr)]
        );
    }
    curr = new Date(2020, month, dayOfMonth + 1);
    while (true) {
      for (const routine of routines)
        ans += parseInt(
          routine.timeNeeded[getMonth(curr)][getDayOfMonth(curr)]
        );
      if (getDayOfWeek(curr) === 0) break;
      curr = new Date(curr.getTime() - 24 * 60 * 60 * 1000);
    }
    return ans;
  }
};

const getNumRoutinesDone = (
  month = getMonth(),
  dayOfMonth = getDayOfMonth(),
  state
) => {
  if (state === 0) {
    let ans = 0;
    for (const routine of routines) {
      ans += routine.done[month][dayOfMonth] ? 1 : 0;
    }
    return ans;
  } else if (state === 1) {
    let ans = 0;
    const week = getWeekOf(month, dayOfMonth);
    for (const routine of routines)
      for (const date of week) ans += routine.done[date[0]][date[1]] ? 1 : 0;
    return ans;
  }
};
const getRoutineByDay = (month = getMonth(), dayOfMonth = getDayOfMonth()) => {
  const date = new Date(2020, month, dayOfMonth);
  let dayOfWeek = date.getDay() - 1;
  if (dayOfWeek < 0) dayOfWeek += 7;
  return routines.filter(
    (routine) => routine.active[month][dayOfMonth] && routine.days[dayOfWeek]
  );
};
export {
  getRoutines,
  getRoutineByName,
  addRoutine,
  toggleRoutineByName,
  markRoutineAsDone,
  deactivateRoutineByName,
  deletRoutineByName,
  activateRoutineByName,
  getAcitveRoutines,
  getTodaysRoutines,
  getPercentageDone,
  getTimeSpent,
  getRoutineByDay,
  getNumRoutinesDone,
};
