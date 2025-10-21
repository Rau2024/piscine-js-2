function invert(obj) {
  const inverted = {};

  for (const [key, value] of Object.entries(obj)) {
    inverted[value] = key;
  }

  return inverted;
}