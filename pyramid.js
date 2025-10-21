function pyramid(str, n) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat((n - i) * str.length);
    let blocks = str.repeat(2 * i - 1);
    res += spaces + blocks + (i < n ? '\n' : '');
  }
  return res;
}
