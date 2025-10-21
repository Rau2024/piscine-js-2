function indexOf(arr, value, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex = arr.length + fromIndex;
    if (fromIndex < 0) fromIndex = 0;
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
  if (fromIndex < 0) {
    fromIndex = arr.length + fromIndex;
  }
  if (fromIndex >= arr.length) fromIndex = arr.length - 1;
  for (let i = fromIndex; i >= 0; i--) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}
