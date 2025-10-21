function addWeek(date) {
  const weekdays = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
  ];


  const epoch = new Date("0001-01-01");
  const diffTime = date.getTime() - epoch.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));


  const index = (diffDays % 14 + 14) % 14;
  return weekdays[index];
}

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date.getTime());
  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);
  return newDate;
}
