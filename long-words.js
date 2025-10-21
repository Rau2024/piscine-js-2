function longWords(arr) {
  return arr.every(str => typeof str === "string" && str.length >= 5);
}

function oneLongWord(arr) {
  return arr.some(str => typeof str === "string" && str.length >= 10);
}

function noLongWords(arr) {
  return arr.every(str => typeof str !== "string" || str.length < 7);
}
