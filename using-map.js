
function citiesOnly(arr) {
  return arr.map(item => item.city);
}

function upperCasingStates(arr) {
  return arr.map(state =>
    state
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  );
}

function fahrenheitToCelsius(arr) {
  return arr.map(temp => {
    const f = parseInt(temp, 10);
    const c = Math.floor((f - 32) * (5 / 9));
    return `${c}°C`;
  });
}

function trimTemp(arr) {
  return arr.map(item => ({
    ...item,
    temperature: item.temperature.replace(/\s+/g, "").replace("°F", "°F"),
  }));
}

function tempForecasts(arr) {
  return arr.map(item => {
    const f = parseInt(item.temperature, 10);
    const c = Math.floor((f - 32) * (5 / 9));
    const stateFormatted = item.state
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    return `${c}°Celsius in ${item.city}, ${stateFormatted}`;
  });
}
