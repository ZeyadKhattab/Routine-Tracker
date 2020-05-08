import Routine from "./Routine";
import { readFromLocalStorage, save } from "./helpers";

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
const addRoutine = (name, type, weekSchedule) => {
  const newRoutine = new Routine(name, type, weekSchedule);
  routines.push(newRoutine);
  save("routines", JSON.stringify(routines));
};
const markRoutineAsDone = (name, addedInfo, minutes) => {
  getRoutineByName(name).markDone(addedInfo, minutes);
  save("routines", JSON.stringify(routines));
};
export {
  getRoutines,
  getRoutineByName,
  addRoutine,
  toggleRoutineByName,
  markRoutineAsDone,
};
