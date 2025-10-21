function trunc(x) {
  if (x === 0 || x === -0) return x;
  if (x > -1 && x < 1) return 0;

  const sign = x < 0 ? -1 : 1;
  const abs_x = sign * x;

  let result = 0;
  let temp = abs_x;

  const powers = [1000000, 100000, 10000, 1000, 100, 10, 1];

  for (let i = 0; i < powers.length; i++) {
    const power = powers[i];
    while (temp >= power) {
      temp -= power;
      result += power;
    }
  }

  return result * sign;
}

function floor(x) {
  const truncated = trunc(x);
  if (x >= 0) {
    return truncated;
  } else {
    return x === truncated ? truncated : truncated - 1;
  }
}

function ceil(x) {
  const truncated = trunc(x);
  if (x >= 0) {
    return x === truncated ? truncated : truncated + 1;
  } else {
    return truncated;
  }
}

function round(x) {
  if (x >= 0) {
    return floor(x + 0.5);
  } else {
    return ceil(x - 0.5);
  }
}

