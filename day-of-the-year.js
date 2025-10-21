function dayOfTheYear(date) {
  const calcYear = new Date(date.getFullYear().toString().padStart(4, "0"));
  return Math.abs(date.getTime() - calcYear.getTime()) / (24 * 60 * 60 * 1000) + 1;
}
