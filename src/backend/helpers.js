const FOUR_HOURS = 4 * 60 * 60 * 1000;

const getDayOfWeek = () => {
  let today = new Date(new Date().getTime() - FOUR_HOURS).getDay() - 1;
  if (today < 0) today += 7;
  return today;
};
const getDayOfMonth = () =>
  new Date(new Date().getTime() - FOUR_HOURS).getDate() - 1;
const getMonth = () => new Date(new Date().getTime() - FOUR_HOURS).getMonth();

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
const getDaysInMonths = (month, year) => new Date(year, month + 1, 0).getDate();

export {
  getDayOfWeek,
  getDayOfMonth,
  getMonth,
  getArray,
  readFromLocalStorage,
  save,
  getDaysInMonths,
};
