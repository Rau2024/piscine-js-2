function nasa(N) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[result.length] = "NASA";
    } else if (i % 3 === 0) {
      result[result.length] = "NA";
    } else if (i % 5 === 0) {
      result[result.length] = "SA";
    } else {
      result[result.length] = i + '';
    }
  }

  return join(result, ' ');
}

function join(array, separator) {
  if (separator === undefined) {
    separator = ',';
  }

  if (array.length === 0) {
    return '';
  }

  let result = array[0] + '';

  for (let i = 1; i < array.length; i++) {
    result += separator + array[i];
  }

  return result;
}
