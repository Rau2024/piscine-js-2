function firstDayWeek(weekNumber, yearString) {
  const year = parseInt(yearString, 10);
  const jan = new Date(2000, 0, 1);
  jan.setFullYear(year);
  const dayOfWeekjan = jan.getDay();
  const daysToMonday = dayOfWeekjan === 0 ? 6 : dayOfWeekjan - 1;
  const mondayOfFirstWeek = new Date(jan.getTime());
  mondayOfFirstWeek.setDate(jan.getDate() - daysToMonday);
  const targetDate = new Date(mondayOfFirstWeek.getTime());
  targetDate.setDate(mondayOfFirstWeek.getDate() + (weekNumber - 1) * 7);
  if (targetDate.getFullYear() < year) {
    return `01-01-${yearString.padStart(4, "0")}`;
  }
  const day = String(targetDate.getDate()).padStart(2, "0");
  const month = String(targetDate.getMonth() + 1).padStart(2, "0");
  const formattedYear = String(targetDate.getFullYear()).padStart(4, "0");
  return `${day}-${month}-${formattedYear}`;
}
