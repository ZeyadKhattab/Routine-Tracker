const FOUR_HOURS = 4 * 60 * 60 * 1000;

const getDayOfWeek = (date = new Date()) => {
  date = new Date(date.getTime() - FOUR_HOURS);
  let today = date.getDay() - 1;
  if (today < 0) today += 7;
  return today;
};
const getDayOfMonth = (date = new Date(new Date().getTime() - FOUR_HOURS)) =>
  date.getDate() - 1;
const getMonth = (date = new Date(new Date().getTime() - FOUR_HOURS)) =>
  date.getMonth();

const getArray = (n, m, defaultVal) => {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let curr = [];
    for (let j = 0; j < m; j++) curr.push(defaultVal);
    ans.push(curr);
  }
  return ans;
};
const readFromLocalStorage = (key) => localStorage.getItem(key);
const save = (key, value) => localStorage.setItem(key, value);
const getDaysInMonths = (month, year = 2020) =>
  new Date(year, month + 1, 0).getDate();
const getWeekOf = (month, dayOfMonth) => {
  let curr = new Date(2020, month, dayOfMonth + 1);
  let ans = [];
  while (true) {
    curr = new Date(curr.getTime() + 24 * 60 * 60 * 1000);
    if (getDayOfWeek(curr) === 0) break;
    ans.push([getMonth(curr), getDayOfMonth(curr)]);
  }
  ans.reverse();
  curr = new Date(2020, month, dayOfMonth + 1);
  while (true) {
    ans.push([getMonth(curr), getDayOfMonth(curr)]);
    if (getDayOfWeek(curr) === 0) break;
    curr = new Date(curr.getTime() - 24 * 60 * 60 * 1000);
  }
  ans.reverse();
  return ans;
};
export {
  getDayOfWeek,
  getDayOfMonth,
  getMonth,
  getArray,
  readFromLocalStorage,
  save,
  getDaysInMonths,
  getWeekOf,
};
