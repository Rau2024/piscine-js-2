function letterSpaceNumber(str) {
  const regex = /[a-zA-Z] \d(?![0-9a-zA-Z])/g;
  return str.match(regex) || [];
}