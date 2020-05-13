import Routine from "./Routine";
import {
  readFromLocalStorage,
  save,
  getDayOfMonth,
  getMonth,
  getDayOfWeek,
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
  const newRoutine = new Routine(name, type, weekSchedule, name, url);
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
    if (routines[i].name === name) routines.splice(i);
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
};
