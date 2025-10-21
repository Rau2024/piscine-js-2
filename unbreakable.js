function split(string, separator) {
  if (separator === undefined) {
    return [string];
  }

  if (separator === '') {
    const result = [];
    for (let i = 0; i < string.length; i++) {
      result[result.length] = string[i];
    }
    return result;
  }

  const result = [];
  let start = 0;

  for (let i = 0; i <= string.length - separator.length; i++) {
    let match = true;
    for (let j = 0; j < separator.length; j++) {
      if (string[i + j] !== separator[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      result[result.length] = string.slice(start, i);
      start = i + separator.length;
      i = start - 1;
    }
  }

  result[result.length] = string.slice(start);
  return result;
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
