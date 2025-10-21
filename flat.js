function flat(arr, depth = 1) {
  return depth > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val), [])
    : arr.slice();
}
