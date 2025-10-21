function get(myKey) {
  return sourceObject[myKey];
}

function set(myKey, myValue) {
  sourceObject[myKey] = myValue;
  return sourceObject[myKey];
}
