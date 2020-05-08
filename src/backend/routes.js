import Routine from "./Routine";
import { readFromLocalStorage, save } from "./helpers";
// let routines = [
//   new Routine("Sports", "Daily"),
//   new Routine("DeepMind", "Weekly"),
// ];
const routines = JSON.parse(readFromLocalStorage("routines")).map((routine) =>
  Object.assign(new Routine(), routine)
);
const getRoutines = () => routines;
const getRoutineByName = (name) => {
  for (const routine of routines) if (routine.name === name) return routine;
};
const addRoutine = (name, type, weekSchedule) => {
  const newRoutine = new Routine(name, type, weekSchedule);
  routines.push(newRoutine);
  save("routines", JSON.stringify(routines));
};
export { getRoutines, getRoutineByName, addRoutine };
