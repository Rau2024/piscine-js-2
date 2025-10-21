function sunnySunday(date) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
  const dayDifference = Math.floor((date - new Date(1, 0, 1)) / (24 * 60 * 60 * 1000));
  const currentDayIndex = ((dayDifference % days.length) + days.length) % days.length;
  return days[currentDayIndex];
}
