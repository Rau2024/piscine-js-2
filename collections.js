const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
const setToArr = (set) => [...set];
const setToStr = (set) => [...set].join('');
const strToArr = (str) => str.split('');
const strToSet = (str) => new Set(str.split(''));
const mapToObj = (map) => Object.fromEntries(map);
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => Object.assign({}, arr);
const strToObj = (str) => Object.assign({}, str.split(''));

const superTypeOf = (value) => {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (value instanceof Map) return 'Map';
  if (value instanceof Set) return 'Set';
  if (Array.isArray(value)) return 'Array';
  return Object.prototype.toString.call(value).slice(8, -1);
};
