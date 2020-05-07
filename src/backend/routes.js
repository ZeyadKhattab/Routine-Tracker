import Routine from "./Routine";
const getRoutines = () => {
  let routines = [
    new Routine("Sports", "Daily"),
    new Routine("DeepMind", "Weekly"),
  ];
  return routines;
};

export { getRoutines };
