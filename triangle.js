function triangle(str, n) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    res += str.repeat(i) + (i < n ? '\n' : '');
  }
  return res;
}
