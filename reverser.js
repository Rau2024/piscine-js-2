function reverse(input) {
  if (typeof input === 'string') {
    let result = '';
    for (let i = input.length - 1; i >= 0; i--) {
      result += input[i];
    }
    return result;
  } else {
    const length = input.length;
    for (let i = 0; i < length / 2; i++) {
      const temp = input[i];
      input[i] = input[length - 1 - i];
      input[length - 1 - i] = temp;
    }
    return input;
  }
}