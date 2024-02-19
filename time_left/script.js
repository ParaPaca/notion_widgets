const getPercentageAndText = (progressSelector, textSelector, value) => {
  const progressElement = document.querySelector(progressSelector);
  const textElement = document.querySelector(textSelector);

  const percentage = (value * 100).toFixed(0);

  progressElement.style.setProperty(
    "--percentage",
    `calc(${percentage}% - 6px)`
  );
  textElement.innerHTML += `${percentage}%`;
};

const millisecondsInDay = 1000 * 60 * 60 * 24;
const maxAge = 75;
const myBirthDay = new Date("1998-12-13");
const currentDate = new Date();

const ageDifference = currentDate - myBirthDay;
const remainingLife = ageDifference / (millisecondsInDay * 365.25) / maxAge;

const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
const timePassedOfYear =
  (currentDate - startOfYear) / millisecondsInDay / 365.25;

const startOfMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);
const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();
const timePassedOfMonth = (currentDate - startOfMonth) / millisecondsInDay;

const currentDayOfWeek = currentDate.getDay();
const dayPassedThisWeek = currentDayOfWeek === 0 ? 7 : currentDayOfWeek;
const percentOfWeekPassed = dayPassedThisWeek / 7;

const startOfDay = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate()
);
const timePassedOfDay = (currentDate - startOfDay) / millisecondsInDay;

getPercentageAndText(".progress.life", ".label-life", remainingLife);
getPercentageAndText(".progress.year", ".label-year", timePassedOfYear);
getPercentageAndText(
  ".progress.month",
  ".label-month",
  timePassedOfMonth / daysInMonth
);
getPercentageAndText(".progress.week", ".label-week", percentOfWeekPassed);
getPercentageAndText(".progress.day", ".label-day", timePassedOfDay);
