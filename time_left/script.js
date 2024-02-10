const progressLife = document.querySelector(".progress.life");
const textLife = document.querySelector(".label-life");

const progressYear = document.querySelector(".progress.year");
const textYear = document.querySelector(".label-year");

const progressMonth = document.querySelector(".progress.month");
const textMonth = document.querySelector(".label-month");

const progressWeek = document.querySelector(".progress.week");
const textWeek = document.querySelector(".label-week");

const progressDay = document.querySelector(".progress.day");
const textDay = document.querySelector(".label-day");

const millisecondsInDay = 1000 * 60 * 60 * 24;

const myBirthDay = new Date("1998-12-13");
const currentDate = new Date();
const maxAge = 70;
const ageDifference = currentDate - myBirthDay;
const remainingLife =
  (ageDifference / (millisecondsInDay * 365.25) / maxAge) * 100;

const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
const timePassedOfYear = currentDate - startOfYear;
const percentOfYearPassed =
  (timePassedOfYear / (millisecondsInDay * 365.25)) * 100;

const startOfMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);
const timePassedOfMonth = currentDate - startOfMonth;
const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();
const percentOfMonthPassed =
  (timePassedOfMonth / (millisecondsInDay * daysInMonth)) * 100;

const currentDayOfWeek = currentDate.getDay();
const dayPassedThisWeek = currentDayOfWeek === 0 ? 7 : currentDayOfWeek;
const percentOfWeekPassed = (dayPassedThisWeek / 7) * 100;

const startOfDay = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate()
);
const timePassedOfDay = currentDate - startOfDay;
const percentOfDayPassed = (timePassedOfDay / millisecondsInDay) * 100;

progressLife.style.setProperty("--life-lived", `calc(${remainingLife}% - 3px)`);
textLife.innerHTML += `${remainingLife.toFixed(0)}%`;

progressYear.style.setProperty(
  "--year-percentage",
  `calc(${percentOfYearPassed}% - 3px)`
);
textYear.innerHTML += `${percentOfYearPassed.toFixed(0)}%`;

progressMonth.style.setProperty(
  "--month-percentage",
  `calc(${percentOfMonthPassed}% - 3px)`
);
textMonth.innerHTML += `${percentOfMonthPassed.toFixed(0)}%`;

progressWeek.style.setProperty(
  "--week-percentage",
  `calc(${percentOfWeekPassed}% - 3px)`
);
textWeek.innerHTML += `${percentOfWeekPassed.toFixed(0)}%`;

progressDay.style.setProperty(
  "--day-percentage",
  `calc(${percentOfDayPassed}% - 3px)`
);
textDay.innerHTML += `${percentOfDayPassed.toFixed(0)}%`;
