function filterShortStateName(arr) {
  return arr.filter(str => str.length < 7);
}

function filterStartVowel(arr) {
  return arr.filter(str => /^[aeiou]/i.test(str));
}

function filter5Vowels(arr) {
  return arr.filter(str => (str.match(/[aeiou]/gi) || []).length >= 5);
}

function filter1DistinctVowel(arr) {
  return arr.filter(str => new Set((str.toLowerCase().match(/[aeiou]/g) || [])).size === 1);
}

function multiFilter(arr) {
  return arr.filter(item =>
    item.capital.length >= 8 &&
    !/^[aeiou]/i.test(item.name) &&
    /[aeiou]/i.test(item.tag) &&
    item.region !== "South"
  );
}
