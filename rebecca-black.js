function isFriday(date) {
  const current = date.getDay();
  if (current === 5) {
    return true;
  }
  return false;
}
function isWeekend(date) {
  const current = date.getDay();
  if (current === 5 || current === 6) {
    return true;
  }
  return false;
}
function isLeapYear(date) {
  const year = date.getFullYear();
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
function isLastDayOfMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const current = new Date(year, month, 0).getDate();
  return current === date.getDate();
}
