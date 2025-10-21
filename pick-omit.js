
function pick(obj, keys) {
  const result = {};

  const keyArray = Array.isArray(keys) ? keys : [keys];

  for (const key of keyArray) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

function omit(obj, keys) {
  const result = {};

  const keyArray = Array.isArray(keys) ? keys : [keys];

  for (const key of Object.keys(obj)) {
    if (!keyArray.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}