function sums(n) {
  if (n <= 1) return [];

  const results = [];

  function backtrack(remaining, start, current) {
    if (remaining === 0) {
      if (current.length > 1) results.push([...current]);
      return;
    }
    for (let i = start; i <= remaining; i++) {
      current.push(i);
      backtrack(remaining - i, i, current);
      current.pop();
    }
  }

  backtrack(n, 1, []);
  return results;
}