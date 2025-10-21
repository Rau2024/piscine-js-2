function adder(arr, initial = 0) {
  return arr.reduce((acc, num) => acc + num, initial);
}

function sumOrMul(arr, initial = 0) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc * num;
    } else {
      return acc + num;
    }
  }, initial);
}

function funcExec(arr, initial) {
  return arr.reduce((acc, fn) => fn(acc), initial);
}
