function filter(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function reject(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function partition(arr, fn) {
  const pass = [];
  const fail = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      pass.push(arr[i]);
    } else {
      fail.push(arr[i]);
    }
  }
  return [pass, fail];
}
