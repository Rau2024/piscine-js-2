function findExpression(target) {
  function search(value, expr) {
    if (value === target) return expr;
    if (value > target) return undefined;
    return search(value + 4, expr + ' ' + add4) || search(value * 2, expr + ' ' + mul2);
  }
  return search(1, '1');
}
