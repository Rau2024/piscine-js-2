function repeat(string, number) {
  if (number <= 0) return '';
  return string + repeat(string, number - 1);
}
